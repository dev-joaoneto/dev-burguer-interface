import { CategoriesCarousel, OffersCarousel } from "../../components";
import { Banner, Container } from "./styles";


export function Home() {
  return (
    <Container>
      <Banner>
        <h1>Bem vindo!</h1>
      </Banner>
      
        <div>
          <CategoriesCarousel />
          <OffersCarousel />
        </div>
      
    </Container>
  );
}
