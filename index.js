const express = require('express');

const app = express();

const handlebars = require('express-handlebars');

const clubs = [
    {
        id: 1,
        name: 'FC Barcelona',
        img: '/img/barcelona.webp',
        description: 'Futbol Club Barcelona, commonly known as Barcelona and familiarly as Barça, is a professional football club based in Barcelona, Catalonia, Spain, that competes in La Liga, the top flight of Spanish football.'
    },
    {
        id: 2,
        name: 'Real Madrid CF',
        img: '/img/real-madrid.svg',
        description: 'Real Madrid Club de Fútbol, commonly referred to as Real Madrid, is a Spanish football club based in Madrid. The club competes in La Liga, the top tier of Spanish football. Founded in 1902 as Madrid Football Club, the club has traditionally worn a white home kit.'
    },
    {
        id: 3,
        name: 'AC Milan',
        img: '/img/milan.png',
        description: 'Associazione Calcio Milan, commonly referred to as AC Milan or simply Milan, is an Italian professional football club based in Milan, Lombardy.'
    },
    {
        id: 4,
        name: 'Juventus FC',
        img: '/img/juventus.svg',
        description: 'Juventus Football Club, commonly known as Juventus or colloquially as Juve, is an Italian professional football club based in Turin, Piedmont, who compete in Serie A, the top tier of the Italian football league system.'
    },
    {
        id: 5,
        name: 'Manchester City',
        img: '/img/manchester-city.webp',
        description: 'Manchester City Football Club is a professional football club based in Manchester, England. The club competes in the Premier League, the top tier of English football. Founded in 1880 as St. Mark/s, they became Ardwick Association Football Club in 1887 and Manchester City in 1894.'
    },
    {
        id: 6,
        name: 'Liverpool',
        img: '/img/liverpool.webp',
        description: 'Liverpool Football Club is a professional football club based in Liverpool, England. The club competes in the Premier League, the top tier of English football. Founded in 1892, the club joined the Football League the following year and has played its home games at Anfield since its formation.'
    }];

app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        title: 'The Most Popular Clubs',
        items: clubs
    });
})

app.get('/clubs/:id', (req, res) => {
    const currentClub = clubs.find(clubs => clubs.id == req.params.id)
    res.render('information', currentClub)
});

app.listen(5000, () => console.log('server is listining on http://localhost:5000')
); 