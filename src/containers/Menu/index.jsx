import { useEffect, useState } from 'react';
import { Container, Banner, CategoryMenu, ProductsContainer, CategoryButton, HomeButton } from './styles';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { CardProduct } from '../../components/CardProduct';
import { useLocation, useNavigate } from 'react-router-dom';

export function Menu() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  const navigate = useNavigate();
  const { search } = useLocation();
  const queryParams= new URLSearchParams(search);
  
  const [activeCategory, setActiveCategory] = useState(() => {
    const categoryId = +queryParams.get('category');

      if (categoryId) {
        return categoryId;
      }
      return 0
  }
  );
  

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      const newCategories = [{ id: 0, name: 'Todas' }, ...data];

      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data } = await api.get('/products');

      const newProducts = data.map((product) => ({
        currencyValue: formatPrice(product.price),
        ...product,
      }));

      setProducts(newProducts);
    }

    loadCategories();
    loadProducts();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category_id === activeCategory);
      setFilteredProducts(filtered);
    }
  }, [activeCategory, products]);

  return (
    <Container>
      <Banner>
        <h1>
          O Melhor
          <br />
          Hamburguer
          <br />
          Do Mundo!
          <span>Esse cardápio está irresistível!</span>
        </h1>
      </Banner>
      <HomeButton to={`/`}>
          ↩ <p>Voltar</p>
      </HomeButton>
      <CategoryMenu>
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            $isActiveCategory={category.id === activeCategory}
            onClick={() => {
              navigate(
                {
                  pathname: '/cardapio',
                  search: `?category=${category.id}`,
                },
                {
                  replace: true,
                },
              );
              setActiveCategory(category.id);
            }}
          >
            {category.name}
          </CategoryButton>
        ))}
      </CategoryMenu>

      <ProductsContainer>
        {filteredProducts.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  );
}
