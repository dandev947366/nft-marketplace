import { faker } from '@faker-js/faker';

// import {ipfsClient} from 'ipfs-http-client'

// const authorization = 'Basic ' + Buffer.from(process.env.INFURA_PID+':'+process.env.INFURA_API).toString('base64')

// const client = ipfsClient.create({
//     host: 'https://ipfs.infura.io',
//     port: 5001,
//     protocol: 'https',
//     headers: {authorization,},
// })

const attributes = {
    weapon:[
        'Stick',
        'Knife',
        'Blade',
        'Club',
        'Ax',
        'Sword',
        'Spear',
        'Halberd',
    ],
    environment:[
        'Space',
        'Sky',
        'Deserts',
        'Forests',
        'Grasslands',
        'Mountains',
        'Oceans',
        'Rainforests',
    ],
    rarity: Array.from(Array(6).keys())
}

const toMetadata = ({id, name, description, price, image}) => ({
    id,
    name,
    description,
    price,
    image,
    demand: faker.random.numeric({min:10, max:100}),
    attributes: [
        {
            trait_type: 'Environment',
            value: attributes.environment.sort(() => 0.5 - Math.random())[0]
        },
        {
            trait_type: 'Weapon',
            value: attributes.weapon.sort(() => 0.5 - Math.random())[0]
        },
        {
            trait_type: 'Rarity',
            value: attributes.rarity.sort(() => 0.5 - Math.random())[0]
        },
        {
            display_type: 'date',
            trait_type: 'Created',
            value: Date.now()
        },
        {
            display_type: 'number',
            trait_type: 'Generation',
            value: 1
        }
    ]
})
const toWebp = async(image)=>{
    await sharp(image).resize(1000).webp().toBuffer()
}
const uploadToIPFS = async(data) => {
    const created = await clientInformation.add(data)
    return `https://ipfs.io/ipfs/${created.path}`
}
export{
    toWebp,
    toMetadata,
    uploadToIPFS
}
// const result = toMetadata({
//     id:1,
//     name:'Graduate',
//     description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam distinctio unde eligendi eum natus harum perferendis fugit vel modi amet, sint molestiae quaerat animi quidem cum voluptatem ipsa vero maiores.`,
//     price: faker.random.numeric({min:0.01, max:1.0}),
//     image: faker.image.imageUrl()
// })

// console.log(result)