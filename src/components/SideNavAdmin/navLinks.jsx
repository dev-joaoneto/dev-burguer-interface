import { List, ListPlus, Receipt } from "@phosphor-icons/react";

export const navLinks = [
    {
        id: 1,
        label: 'Pedidos',
        path: '/admin/pedidos',
        icon: <Receipt size={32} />
    },
    {
        id: 2,
        label: 'Produtos',
        path: '/admin/produtos',
        icon: <List size={32} />
    },
    {
        id: 3,
        label: 'Adicionar Produto',
        path: '/admin/novo-produto',
        icon: <ListPlus size={32} />
    },
    

]