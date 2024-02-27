const initialState = {
    posts: [
        {
            id: '1',
            title: 'Article title',
            shortDescription: 'Short description of the article...',
            category: 'News',
            content: 'Main content of the article',
            publishedDate: new Date('02-02-2024'),
            author: 'Patryk "Buła" Tokarz'
        },
        {
            id: '2',
            title: 'Article title II',
            shortDescription: 'Short description of the article...',
            category: 'Sport',
            content: 'Main content of the article',
            publishedDate: new Date('02-02-2023'),
            author: 'Jakub "stelma" Stelmasiak'
        },
        {
            id: '3',
            title: 'Article title III',
            shortDescription: 'Short description of the article...',
            category: 'Movies',
            content: 'Main content of the article',
            publishedDate: new Date('02-02-2022'),
            author: 'John Doe'
        }
    ],
    categories: [
        {
            id: '1',
            name: 'Sport'
        },
        {
            id: '2',
            name: 'News'
        },
        { 
            id: '3',
            name: 'Movies'
        }
    ]
};
export default initialState;