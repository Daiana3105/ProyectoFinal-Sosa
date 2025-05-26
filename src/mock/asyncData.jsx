export const productos = [
  

    {
        id: '1',
        name: 'Dior Whisky',
        price: 150000,
        description: 'Whisky Dior es el perfume ideal para hombres con presencia. Su aroma envolvente fusiona la fuerza del whisky con notas cálidas y seductoras, creando una fragancia moderna, elegante y segura de sí misma. Perfecta para destacar tanto de día como de noche.',
        stock: 20,
        category: 'ofertas',
        img: '../perfume1.avif'
      },
      {
        id: '2',
        name: 'Dior Rose Flower',
        price: 130000,
        description: 'Dior Rose Flower es una fragancia femenina y delicada que despierta los sentidos con el encanto natural de la rosa. Su aroma floral, suave y elegante, es perfecto para mujeres románticas, auténticas y seguras de sí mismas. Ideal para usar todos los días y dejar una huella inolvidable.',
        stock: 20,
        category: 'ofertas',
        img: '../perfume2.jpg'
      },
      {
        id: '3',
        name: 'Dior Poison girl',
        price: 240000,
        description: 'Dior Poison Girl es una fragancia intensa y moderna, pensada para quienes viven con autenticidad y determinación. Sus notas de naranja amarga, rosa damascena y vainilla crean un aroma envolvente y vibrante, ideal para expresarte con confianza y estilo propio.',
        stock: 20,
        category: ["mujer", "nuevos"],
        img: '../perfume3.jpg'
      },
      {
        id: '4',
        name: 'Dior Dune',
        price: 240000,
        description: 'Dior Dune es una fragancia armoniosa y serena, inspirada en la conexión con la naturaleza y la libertad interior. Con notas de peonía, ámbar y sándalo, evoca la brisa marina y los paisajes cálidos, ideal para quienes buscan equilibrio, calma y expresión auténtica.',
        stock: 20,
        category: 'mujer',
        img: '../perfume4.jpg'
      },
      {
        id: '5',
        name: 'Dior Sauvage',
        price: 180000,
        description: 'Dior Sauvage es una fragancia intensa y libre, inspirada en paisajes abiertos y cielos infinitos. Con notas frescas de bergamota y un fondo amaderado especiado, expresa fuerza, autenticidad y carácter, sin etiquetas ni límites. Ideal para quienes viven su esencia con determinación.',
        stock: 20,
        category: 'hombre',
        img: '../perfume5.jpg'
      },
      {
        id: '6',
        name: 'Dior Homme Intense',
        price: 250000,
        description: 'Dior Homme Intense es una fragancia sofisticada y envolvente, que combina elegancia moderna con profundidad emocional. Sus notas de iris, ámbar y vetiver crean un aroma cálido y refinado, ideal para quienes expresan su estilo con confianza, sensibilidad y presencia.',
        stock: 20,
        category: 'nuevos',
        img: '../perfume6.webp'
      },
      {
        id: '7',
        name: 'Carolina Herrera good girl',
        price: 200000,
        description: 'Esta fragancia es reconocida por su combinación de notas florales y orientales, destacando ingredientes como el jazmín, la tonka y el cacao.​',
        stock: 20,
        category: 'ofertas',
        img: '../perfume7.jpg'
      },
      {
        id: '8',
        name: 'Carolina Herrera CH',
        price: 150000,
        description: '🌸 CH Carolina Herrera es una fragancia elegante y femenina, con notas florales, frutales y un toque dulce de praliné. Ideal para mujeres sofisticadas que quieren dejar una huella inolvidable.',
        stock: 20,
        category: 'mas vendidos',
        img: '../perfume8.jpg'
      },
      {
        id: '9',
        name: 'Carolina Herrera 212 Vip Rose NYC',
        price: 240000,
        description: '💖 Femenina, fresca y chic. 212 VIP Rosé NYC combina el glamour neoyorquino con notas de champán rosado, ideal para quienes marcan tendencia a cada paso.',
        stock: 20,
        category: 'nuevos',
        img: '../perfume9.jpg'
      },
      {
        id: '10',
        name: 'Carolina Herrera Bad Boy',
        price: 230000,
        description: '⚡ Bad Boy de Carolina Herrera es una fragancia intensa y seductora. Con notas de pimienta negra, bergamota y cacao, representa al hombre moderno: fuerte, rebelde y con estilo.',
        stock: 20,
        category: 'mas vendidos',
        img: '../perfume10.jpg'
      },
      {
        id: '11',
        name: 'Carolina Herrera 212 VIP Men',
        price: 210000,
        description: '🍸 Carolina Herrera 212 VIP Men es una fragancia sofisticada y magnética, ideal para hombres que saben cómo destacar. Con notas de vodka, menta, jengibre y cuero, representa el estilo de vida exclusivo y nocturno de Nueva York. ¡Sé el alma de la fiesta!',
        stock: 20,
        category: 'mas vendidos',
        img: '../perfume11.webp'
      },
      {
        id: '12',
        name: 'Carolina Herrera 212 Men Heroes',
        price: 220000,
        description: '🛹 212 Men Heroes celebra la autenticidad, la juventud y la libertad. Con notas frescas de pera, jengibre y cuero, es una fragancia vibrante pensada para hombres modernos que viven sin miedo a ser ellos mismos.',
        stock: 20,
        category: 'nuevos',
        img: '../perfume12.webp'
      },
    
      
      
    ]
//creo y exporto mi promesa

export const getProducts=() =>{
    return new Promise((resolve,reject)=>{
        let error = false
        setTimeout(()=>{
            if(error){
                reject('No hay data')
            }else{
                resolve(productos)
            }
        },3000)
    })
}

//buscar producto 

export const getOneProduct = (id) => {
    return new Promise((resolve)=>{
        setTimeout(()=> {
         let product = productos.find(prod => prod.id === id)
         resolve(product)  
        },2000)
    })
}