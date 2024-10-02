const products = [
    {
      id: 1,
      title: 'Remera',
      price: '1000',
      category: 'deportes',
      description: 'talles: XL, L, M, S, XS',
      image:
        'https://lafabricaderemeras.com.ar/wp-content/uploads/2023/02/2-REMERAS-DEPORTIVAS-150x150.jpg',
    },
    {
      id: 2,
      title: 'Short',
      price: '2000',
      category: 'deportes',
      description: 'talles: 38, 40, 42, 44, 50, 52',
      image:
        'https://modadeportiva.com.ar/wp-content/uploads/2015/10/Keywhoss-Shorts-deportivos-rustico-negro-para-mujer-2016-150x150.jpg',
    },
    {
      id: 30,
      title: 'Buzo',
      price: '3000',
      category: 'urbana',
      description: 'Colores: rojo, azul y verde',
      image:
        'https://winprom.com.ar/wp-content/uploads/2020/06/buzo-1-150x150.jpg',
    },
    {
        id: 33,
        title: 'ford focus titanium',
        price: '300000',
        category: 'auto',
        description: 'El estilizado frente de Focus impone su presencia gracias al diseño de la parrilla con forma hexagonal y los faros más delgados y agresivos.',
        image:
          'https://www.carsmagazine.com.ar/wp-content/uploads/2015/07/prueba-nuevo-focus-1.jpg',
      },
      {
        id: 36,
        title: 'alienware intel core i9',
        price: '30000',
        category: 'electronica',
        description: 'Cuenta con una pantalla LED de 16" QHD+ de 240 Hz para una experiencia visual impresionante, un procesador Intel Core i9 de última generación, 16 GB de memoria DDR5, un SSD M. 2 NVMe de 1 TB y una tarjeta gráfica NVIDIA GeForce RTX 4080 de 12 GB GDDR6 para un rendimiento sobresaliente en gráficos.',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO5IvYtZXM3clDFsFCBrdRYZUb5KYK6AtQ9A&s',
      },
  ];
  
  export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
  
  export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
  };
  
  //falta getCategory -> filter
  
  export const getCategory = (category) => {
    return products.filter((product) => product.category === category);
    //va a retornar un array de prods que cumplan con esa condicion
  };
  