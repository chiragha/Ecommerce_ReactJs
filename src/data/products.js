const products = [

  {
    id: 1,
    title: "Men Jacket",
    price: 120,
    category: "men",
    image: "https://plus.unsplash.com/premium_photo-1688497831384-e40b2e5615cd?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5
  },

  {
    id: 2,
    title: "Women Dress",
    price: 95,
    category: "women",
    image: "https://images.unsplash.com/photo-1616313253719-c46514cddee1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.2
  },

  {
    id: 3,
    title: "Kids Hoodie",
    price: 60,
    category: "kids",
    image: "https://plus.unsplash.com/premium_photo-1675183690442-b5de4b8a3571?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.1
  },

  {
    id: 4,
    title: "Sunglasses",
    price: 40,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1612902457652-33aff0a641fa?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.3
  }
  ,

  {
    id: 5,
    title: "Sunglasses",
    price: 40,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1723802205505-2f88b2227718?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.3
  }
  ,

  {
    id: 6,
    title: "Sunglasses",
    price: 40,
    category: "men",
    image: "https://images.unsplash.com/photo-1619208382871-96f4d45bc840?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.3
  }
  ,

  {
    id: 7,
    title: "Sunglasses",
    price: 40,
    category: "women",
    image: "https://images.unsplash.com/photo-1768803968304-79f51c3e344a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.3
  }
  ,

  {
    id: 8,
    title: "Sunglasses",
    price: 40,
    category: "kids",
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=489&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.3
  }
  ,

  {
    id: 9,
    title: "Sunglasses",
    price: 40,
    category: "men",
    image: "https://images.unsplash.com/photo-1557684387-08927d28c72a?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.3
  }
  ,

  {
    id: 10,
    title: "Sunglasses",
    price: 40,
    category: "men",
    image: "https://images.unsplash.com/photo-1552252059-9d77e4059ad1?q=80&w=385&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.3
  }
  ,

  {
    id: 11,
    title: "Sunglasses",
    price: 40,
    category: "men",
    image: "https://images.unsplash.com/photo-1581381685617-4dc270458aa6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.3
  }
  ,

  {
    id: 12,
    title: "Sunglasses",
    price: 40,
    category: "women",
    image: "https://images.unsplash.com/photo-1651828855150-ba40f6870a53?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.3
  }
  ,

  {
    id: 13,
    title: "Sunglasses",
    price: 40,
    category: "women",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.3
  }
  ,

  {
    id: 14,
    title: "Sunglasses",
    price: 40,
    category: "women",
    image: "https://images.unsplash.com/photo-1739773375456-79be292cedb1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.3
  }
  ,

  {
    id: 15,
    title: "Sunglasses",
    price: 40,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1693212793204-bcea856c75fe?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.3
  }
  ,

  {
    id: 16,
    title: "Sunglasses",
    price: 40,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1693833923492-16fd4c1373bf?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.3
  }
  ,

  {
    id: 17,
    title: "Sunglasses",
    price: 40,
    category: "kids",
    image: "https://images.unsplash.com/photo-1734939205476-1039385aea9f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.3
  }

  ,

  {
    id: 18,
    title: "Sunglasses",
    price: 40,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1705909237050-7a7625b47fac?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.3
  }
  ,

  {
    id: 19,
    title: "Sunglasses",
    price: 40,
    category: "kids",
    image: "https://plus.unsplash.com/premium_photo-1697612943610-fc079bab10cf?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.3
  },

  {
    id: 20,
    title: "Sunglasses",
    price: 40,
    category: "kids",
    image: "https://images.unsplash.com/photo-1619784299133-f691ffaea42f?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.3
  }
  ,

  {
    id: 21,
    title: "Sunglasses",
    price: 40,
    category: "kids",
    image: "https://images.unsplash.com/photo-1696453632995-ed65fe963dbb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.3
  }
  ,

  {
    id: 22,
    title: "Sunglasses",
    price: 40,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.3
  }
  ,

  {
    id: 23,
    title: "Sunglasses",
    price: 40,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1621939745912-aad97fd3a34d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.3
  } ,

  {
    id: 24,
    title: "Sunglasses",
    price: 40,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1682745230951-8a5aa9a474a0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.3
  }

];

export default products;