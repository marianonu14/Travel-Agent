import { Trips } from "../models/Trips.js"

const mainPage = (req, res) => { 
    res.render('index', {
        title: 'Main'
    })
}

const aboutUs = (req, res) => { 
    res.render('aboutus', {
        title: 'About Us'
    })
}

const trips = async (req, res) => { 
    const trips =await  Trips.findAll();

    res.render('trips', {
        title: 'Trips',
        trips
    })
}

const testimonials = (req, res) => { 
    res.render('testimonials', {
        title: 'Testimonials'
    })
}

const tripDetail = async (req, res) => { 
    const { slug } = req.params;
    try {
        const result = await Trips.findOne({where:{ slug }});

        res.render('tripdetail', {
            title: 'Detail',
            result
        })    
    } catch (error) {
        console.log(error);; 
    }

}



export { mainPage, aboutUs, trips, testimonials, tripDetail }