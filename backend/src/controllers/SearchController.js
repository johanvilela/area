const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        console.log('Dentro de index...');
        const { latitude, longitude, techs } = request.query;
        console.log(latitude, longitude, techs);
        
        const techsArray = parseStringAsArray(techs);
        console.log(techsArray);
        
        console.log(`Dev:${Dev}`);
        console.log(`Dev.discriminators:${Dev.discriminators}`);
        
    
        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometric: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        console.log(`devs:${devs}`);
        

        return response.json({ devs });
    }
}