const PETS = [
    {
        id: 1,
        routeName: 'dogs',
        items: [
            {
                id: 1,
                name: 'Bam Bam',
                imageUrl: 'https://images.unsplash.com/photo-1643208411980-7d73e38cd668?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyZWV0JTIwZG9nfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                peso: '2 kg',
                estado: 'São Paulo',
                idade: '2 Anos'
            },
            {
                id: 2,
                name: 'Adolfo',
                imageUrl: 'https://images.unsplash.com/photo-1609695601725-f538f52b2bf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3RyZWV0JTIwZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                peso: '5 Kg',
                estado: 'Bahia',
                idade: '5 Anos'
            },
            {
                id: 3,
                name: 'Foguetinho',
                imageUrl: 'https://images.unsplash.com/photo-1609676919548-d0706884d653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80',
                peso: '3 Kg',
                estado: ' Piauí',
                idade: '10 Anos'
            },
            {
                id: 4,
                name: 'Dudu',
                imageUrl: 'https://images.unsplash.com/photo-1588054384802-88b17ab0d288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
                peso: '12 Kg',
                estado: 'São Paulo',
                idade: '5 Meses'
            },
            {
                id: 5,
                name: 'Buba',
                imageUrl: 'https://images.unsplash.com/photo-1617031115609-b1b9f58cd932?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
                peso: '8 Kg',
                estado: 'Bahia',
                idade: '1 Ano'
            },
            {
                id: 6,
                name: 'Zad',
                imageUrl: 'https://images.unsplash.com/photo-1564436832304-153b01b7a307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                peso: '14 Kg',
                estado: 'Goiás',
                idade: '3 Meses'
            },
            {
                id: 7,
                name: 'Toquinho',
                imageUrl: 'https://images.unsplash.com/photo-1631563709628-1c56911d0709?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=422&q=80',
                peso: '18 Kg',
                estado: 'São Paulo',
                idade: '11 Anos'
            },
            {
                id: 8,
                name: 'Valente',
                imageUrl: 'https://images.unsplash.com/photo-1596493689784-0d54b269ad97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=445&q=80',
                peso: '14 Kg',
                estado: 'Paraná',
                idade: '10 Anos'
            },
            {
                id: 9,
                name: 'Don',
                imageUrl: 'https://images.unsplash.com/photo-1511211827786-c196a14340dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                peso: '14 Kg',
                estado: 'Goiás',
                idade: '3 Anos'
            }
        ]
    },
    {
        id: 2,
        routeName: 'cats',
        items: [
            {
                id: 1,
                name: 'Princesa',
                imageUrl: 'https://images.unsplash.com/photo-1613483183209-b12f90d1f46a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyZWV0JTIwY2F0fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                peso: '3Kg',
                estado: 'Goiás',
                idade: '9 Anos'
            },
            {
                id: 2,
                name: 'Meg',
                imageUrl: 'https://images.unsplash.com/photo-1524214240696-d860645a37d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
                peso: '2 Kg',
                estado: 'Piauí',
                idade: '5 Anos'
            },
            {
                id: 3,
                name: 'Dumdum',
                imageUrl: 'https://images.unsplash.com/photo-1613483185799-969cb5bcc658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                peso: '2 Kg',
                estado: 'São Paulo',
                idade: '2 Anos'
            },
            {
                id: 4,
                name: 'Pedrita',
                imageUrl: 'https://images.unsplash.com/photo-1604831975425-161288e66f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                peso: '4 Kg',
                estado: 'Goiás',
                idade: '7 Anos'
            },
            {
                id: 5,
                name: 'Coraline',
                imageUrl: 'https://images.unsplash.com/photo-1567788755570-05676095ab9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
                peso: '2 Kg',
                estado: 'Piauí',
                idade: '4 Meses'
            },
            {
                id: 6,
                name: 'Musa',
                imageUrl: 'https://images.unsplash.com/photo-1559624989-7b9303bd9792?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
                peso: '3 Kg',
                estado: 'São Paulo',
                idade: '9 Anos'
            },
            {
                id: 7,
                name: 'Peter',
                imageUrl: 'https://images.unsplash.com/photo-1613773273314-00c732f4d7d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                peso: '3 Kg',
                estado: 'São Paulo',
                idade: '5 Anos'
            },
            {
                id: 8,
                name: 'Timber',
                imageUrl: 'https://images.unsplash.com/photo-1583264692124-c11e59bc3358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
                peso: '2 Kg',
                estado: 'Goiás',
                idade: '10 Anos'
            },
            {
                id: 9,
                name: 'Mufasa',
                imageUrl: 'https://images.unsplash.com/photo-1583848975951-568f19478dd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                peso: '3 Kg',
                estado: 'São Paulo',
                idade: '9 Anos'
            }
        ]
    }
]


export default PETS;