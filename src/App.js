import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import Cart from './Cart';
import Checkout from './Checkout';
import Footer from './Footer';



const productsData = [
  { id: 1, name: 'Indianara radha digital reprint ', price: '1999.00',category: 'Art and Paintings', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/painting/t/y/r/13-1-gtsfra10786-s-gbn-indianara-original-imagw82eznaezpb2.jpeg?q=70' },
  { id: 2, name: 'KOTART Digital Reprint ', price: '1519.00',category: 'Art and Paintings', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/painting/p/q/f/10-6-paintingksbr16-kotart-original-imagvthvghyghqft.jpeg?q=70' },
  { id: 3, name: 'Indekraft Digital Reprint', price: '1499.00',category: 'Art and Paintings', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/painting/b/b/o/30-5-ds17622-ds-creations-original-imagzzkhymgeyreh.jpeg?q=70' },
  { id: 4, name: 'Krishna Digital Reprint', price: '1229.00',category: 'Art and Paintings', image: 'https://rukminim2.flixcart.com/image/612/612/kzrbiq80/painting/j/c/2/30-5-sanfpnls32218-saf-original-imagbpfxyqzpk6u9.jpeg?q=70' },
  { id: 5, name: 'Dancing arts Reprint', price: '1100.00',category: 'Art and Paintings', image: 'https://rukminim2.flixcart.com/image/612/612/ktuewsw0/painting/3/8/j/indr929-indianara-original-imag73tazwch3gm4.jpeg?q=70' },
  { id: 6, name: 'Vastu waterfall Reprint', price: '1200.00', category: 'Art and Paintings',image: 'https://rukminim2.flixcart.com/image/612/612/l2m78280/painting/v/9/g/18-3-pf-mdf-1445-9x12-4x12-setof3-pnf-original-imagdwygrze9evgm.jpeg?q=70' },
  { id: 7, name: 'Frames Painting', price: '1130.00',category: 'Art and Paintings', image: 'https://rukminim2.flixcart.com/image/612/612/kdqa4y80/painting/k/z/h/pnf-2096-3pc-9x12-jpg-poster-n-frames-original-imafukmjuvk2vvdr.jpeg?q=70' },
  { id: 8, name: 'Modern Canvas Art', price: '1460.00',category: 'Art and Paintings', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/painting/n/n/v/20-1-gtsfra10406-can-indianara-original-imagvqfyguwtuz4r.jpeg?q=70' },
  { id: 9, name: 'Lord Ganesha Art', price: '1520.00',category: 'Art and Paintings', image: 'https://rukminim2.flixcart.com/image/612/612/kndi4y80/painting/k/v/e/18-indr3472fla-indianara-original-imag22b7v2tzdzjt.jpeg?q=70' },
  { id: 10, name: 'Cross Wooden Frame', price: '2160.00',category: 'Art and Paintings', image: 'https://rukminim2.flixcart.com/image/612/612/jz8qf0w0/painting/f/b/h/pnf-20583-12x12-crossframe-poster-n-frames-original-imafjaghfpndzm9g.jpeg?q=70' },

  { id: 11, name: 'Hand Painting', price: '1770.00',category: 'Art and Paintings', image: 'https://rukminim2.flixcart.com/image/612/612/kdqa4y80/painting/w/c/y/2207-3pc-13-5x10-5-jpg-poster-n-frames-original-imafukfshrkghhhg.jpeg?q=70' },
  { id: 12, name: 'Ganesha art ', price: '2380.00',category: 'Art and Paintings', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/painting/g/p/g/30-5-msnd5p38-sndart-original-imah4zhzjrynn9fh.jpeg?q=70' },
  { id: 13, name: 'Flowers in Vases', price: '1240.00',category: 'Art and Paintings', image: 'https://rukminim2.flixcart.com/image/612/612/ktx9si80/painting/5/p/e/18-3-indr1706fl-indianara-original-imag75mcjhrwuzf8.jpeg?q=70' },
  { id: 14, name: 'Wallmax Gift ', price: '1770.00',category: 'Art and Paintings', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/painting/g/q/l/12-3-wag-jm70147-wallmax-original-imagrdh5qzfcpwu9.jpeg?q=70' },
  { id: 15, name: 'SNDArt Krishna', price: '2380.00',category: 'Art and Paintings', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/wall-decoration/o/f/n/radha-krishna-paintings-for-wall-decoration-set-of-five-3d-original-imah4j7uhwaaa5en.jpeg?q=70' },
  { id: 16, name: 'Massstone Lord', price: '2990.00',category: 'Art and Paintings', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/painting/j/g/c/30-5-ms-6mm-5p-1730-16235-masstone-original-imagtevfnpyyzgug.jpeg?q=70' },
  { id: 17, name: 'Indianara Deer', price: '1580.00',category: 'Art and Paintings', image: 'https://rukminim2.flixcart.com/image/612/612/kfpq5jk0/painting/n/4/f/indr3036-indianara-original-imafw3kq3za7qacn.jpeg?q=70' },
  { id: 18, name: 'Paintings Villa Set', price: '1590.00',category: 'Art and Paintings', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/normal-photo-frame/6/5/k/painting-villa-mdf-photoframe-3-pv-gp-0003-paintings-villa-original-imahf3ybr2av8zpz.jpeg?q=70' },
  { id: 19, name: 'Gold Buddha Sparkle', price: '2590.00',category: 'Art and Paintings', image: 'https://rukminim2.flixcart.com/image/612/612/jueep3k0/painting/z/r/n/sp-2436-057-masstone-original-imaffjhggp68j5sg.jpeg?q=70' },
  { id: 20, name: 'Saf Digital Reprint', price: '1770.00',category: 'Art and Paintings', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/painting/c/j/9/18-3-jmf-492-sndart-original-imahf87sxndxxggb.jpeg?q=70' },
  { id: 21, name: 'Rainbow Arts', price: '3480.00', category: 'Art and Paintings',image: 'https://rukminim2.flixcart.com/image/612/612/kd0k7m80/painting/m/z/w/ra1001-rainbow-arts-original-imafuymqnvkrvxfr.jpeg?q=70' },
  { id: 22, name: 'Shiv Ji Modern Art', price: '2590.00', category: 'Art and Paintings',image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/painting/n/9/0/30-5-sv04-jb-creations-original-imagqcuzw7ykmaxn.jpeg?q=70' },
  { id: 23, name: 'Disney Dress', price: '799.00', category: 'Dresses', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-dress/l/w/l/1-2-years-zeel-kids-frock-baby-girl-party-wear-frock-long-frock-original-imagpmc56hvy4zfb.jpeg?q=70' },
  { id: 24, name: 'Baby Girls Dress', price: '830.00', category: 'Dresses', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-dress/p/3/w/1-2-years-asap-butterfly-frock-elyon-fashion-original-imagskxcaqygypay.jpeg?q=70' },
  { id: 25, name: 'Maxi dress', price: '999.00', category: 'Dresses', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-dress/9/6/7/1-2-years-kids-green-full-netra-creation-original-imagm77qjayhcfru.jpeg?q=70' },
  { id: 26, name: 'Pattu Dress', price: '752.00', category: 'Dresses', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-dress/w/g/0/18-24-months-parrot-gown-ufb-original-imagzmeysgjkhpkk.jpeg?q=70' },

  { id: 27, name: 'Midi', price: '679.00', category: 'Dresses', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-dress/i/4/d/3-6-months-hati-golap-frock-new-ekta-dresses-original-imagrr8cc3gpbyu8.jpeg?q=70' },
  { id: 28, name: 'Minzo dress', price: '799.00', category: 'Dresses', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-dress/j/u/b/18-24-months-asap-butterfly-frock-elyon-fashion-original-imagskxccztzgxvz.jpeg?q=70' },
  { id: 29, name: 'midi Dress', price: '799.00', category: 'Dresses', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-dress/v/b/h/1-2-years-3-part-frock-new-ekta-dresses-original-imah47p2g2fcswhh.jpeg?q=70' },
  {id: 30, name: 'Lipstick', price: '628.00', category: 'Cosmetics', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/lipstick/m/i/z/-original-imagufeczetvt2ry.jpeg?q=70' },
  {id: 31, name: 'Eyeliner', price: '788.00', category: 'Cosmetics', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/eye-liner/o/t/6/3-5-magneteyes-liquid-eyeliner-natural-black-finish-long-lasting-original-imah3wgjy66dqm3p.jpeg?q=70' },
  {id: 32, name: 'Kajal', price: '654.00', category: 'Cosmetics', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-eye-liner/y/e/6/1-1-hi-def-eyeliner-1-1g-black-smudge-proof-waterproof-long-original-imah47mexk2dfa9d.jpeg?q=70' },
  {id: 33, name: 'Foundation ', price: '998.00', category: 'Cosmetics', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-foundation/j/c/8/30-matte-03-instant-hydrating-light-weight-24-hour-wear-charmacy-original-imah3hmaka9gv8mh.jpeg?q=70' },
  {id: 34, name: 'Blush ', price: '489.00', category: 'Cosmetics', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-lip-balm/b/z/d/7-lip-cheek-tint-natural-make-up-blend-in-3-in-1-lips-cheek-and-original-imagt99uzwessd6a.jpeg?q=70' },
  {id: 35, name: 'HeadPhones', price: '4599.00', category: 'Electronics', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/j/o/s/s460-anc-high-quality-pure-sound-ipx5-touch-mini-wireless-5-3-original-imah2gqkcyaumghc.jpeg?q=70' },
  {id: 36, name: 'Mobile', price: '48999.00', category: 'Electronics', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=70' },
  {id: 37, name: ' Camera', price: '5489.00', category: 'Electronics', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dslr-camera/i/o/c/eos-r100-24-1-eos-r100-kit-canon-original-imagqeydhsxgacxp.jpeg?q=70' },
  {id: 38, name: 'Watch ', price: '7489.00', category: 'Electronics', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/h/2/9/-original-imah2trbz6sywygu.jpeg?q=70' },
  {id: 39, name: 'Geyser', price: '9489.00', category: 'Electronics', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/water-purifier/o/n/u/smoke-audi-18-ltr-drink-pure-india-1st-bis-is-16240-2023-cm-original-imah5mw2qskcr6nf.jpeg?q=70' },
  {id: 40, name: 'Sketch Book', price: '948.00', category: 'Stationary', image: 'https://rukminim2.flixcart.com/image/612/612/kdvzwcw0/sketch-pad/f/r/k/50-a5-sketch-book-50-sheets-set-of-2-5-8-x-8-3-inch-top-spiral-original-imafuzcugjmms77x.jpeg?q=70' },
  {id: 41, name: 'Doodle Book', price: '489.00', category: 'Stationary', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/diary-notebook/o/h/x/initial-a-8906065885854-doodle-original-imah5f2bjrgubx8a.jpeg?q=70' },
  {id: 42, name: 'Doms Color Pencils', price: '689.00', category: 'Stationary', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/color-pencil/o/m/i/-original-imagrf8af3m7dwmy.jpeg?q=70' },
  {id: 43, name: 'Resin Art', price: '720.00', category: 'Stationary', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/art-set/1/p/s/resin-art-keychain-alphabet-making-kit-with-200-gm-epoxy-resin-original-imah5vsuybj4j6te.jpeg?q=70' },
  {id: 44, name: 'Art Markers', price: '630.00', category: 'Stationary', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sketch-pen/h/y/r/48-colours-with-carrying-case-for-painting-sketching-calligraphy-original-imagzuzqjgv7ghm4.jpeg?q=70' },
  {id: 45, name: 'NoteBook', price: '999.00', category: 'Stationary', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/diary-notebook/m/t/n/morning-glory-morning-glory-doodle-original-imah5f2axjt5emyk.jpeg?q=70' },
      
    ];


function App() {
  const [cart, setCart] = useState([]);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Art and Paintings');
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  const categories = ['All', 'Art and Paintings', 'Dresses', 'Cosmetics', 'Electronics', 'Stationary'];

  const handleCategoryChange = (category) => setSelectedCategory(category);

  const handleSearchChange = (event) => setSearchQuery(event.target.value.toLowerCase());

 
  const filteredProducts = productsData.filter(
    (product) =>
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery)
  );
  const addToCart = (product) => {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item.id === product.id);
      if (productExists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setIsCart(true);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleProceedToCheckout = () => {
    setIsCheckout(true);
    setIsCart(false);
  };

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    setCart([]);
    setIsCheckout(false);
  };

  const goBackToCart = () => {
    setIsCart(true);
    setIsCheckout(false);
  };

  const goBackToProducts = () => {
    setIsCart(false);
    setIsCheckout(false);
  };


  return (
    <div className="App">
      <header className="header">
        <h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9w8ypKoU4n2aY9iHUrY-_ZNNfkDs0z0TVOwxWq9gQAPmJiF4XLLfo5AZwNFYu7D9cxQ&usqp=CAU" alt="" />
          Curious Cart</h1>
        <p style={{ fontStyle: 'italic' }}>Always Deliver More Than Expected</p>
       
      </header>

      

      
      <nav className="category-nav">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
          
        ))}
    <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-bar"
          />
          
      

      </nav>
      

      <main className="main-container">
        {!isCheckout && !isCart ? (
          <ProductList
            products={filteredProducts} // Display filtered products
            addToCart={addToCart}
          />
        ) : isCart ? (
          <>
            <Cart cartItems={cart} removeFromCart={removeFromCart} onProceedToCheckout={handleProceedToCheckout} />
            <button className="back-to-products-btn" onClick={goBackToProducts}>
              Back to Products
            </button>
          </>
        ) : (
          <Checkout cartItems={cart} onPlaceOrder={handlePlaceOrder} goBackToCart={goBackToCart} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;

