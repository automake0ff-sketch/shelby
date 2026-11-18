import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Home, UtensilsCrossed, WandSparkles, Gamepad2, Stamp,
  Search, ShoppingBag, Plus, Minus, Trash2, MapPin, Phone,
  ExternalLink, ChevronRight, Coffee, Trophy,
  RotateCcw, X, ImageIcon
} from 'lucide-react';
import './styles.css';

const money = (value) => `${value.toFixed(2).replace('.', ',')} €`;

const cafeData = {
  name: 'SHELBYVILLE CAFÉ',
  address: 'Calle Juan Gil, 1',
  postcode: '41020 Sevilla, España',
  phone: '954 49 39 43',
  email: 'shelbyvillecafe@gmail.com',
  instagram: 'https://www.instagram.com/shelbyvillecafe/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Shelbyville+Caf%C3%A9+Calle+Juan+Gil+1+Sevilla',
  menu: 'https://menu.sipos.ai/ahJlfnBpa290ZWEtc2VydmVyLTJyFwsSClJlc3RhdXJhbnQYgICA1_26xAkM',
  justEat: 'https://www.just-eat.es/restaurants-shelbyville-cafe-sevilla/menu'
};

const products = [
  { id: 'omelette', name: 'Omelette', category: 'Brunch', price: 7.5, description: 'Presentado en pan rústico tostado con mantequilla.', icon: '🍳' },
  { id: 'teca', name: 'Teca Toast', category: 'Brunch', price: 7.8, description: 'Pan de semillas, tomate triturado artesano, aguacate, AOVE aromatizado y sésamo.', icon: '🥑', tag: 'Vegetariano' },
  { id: 'castiza', name: 'La Castiza', category: 'Brunch', price: 8, description: 'Pan rústico entero, jamón serrano, huevo revuelto y queso curado.', icon: '🍞' },
  { id: 'shelby', name: 'Shelby', category: 'Clásicos', price: 8, description: 'Mollete andaluz grande tostado, bacon y huevo a la plancha, con queso gratinado.', icon: '🥪', tag: 'Favorito' },
  { id: 'huerto', name: 'Brunch en el Huerto', category: 'Brunch', price: 8, description: 'Pan de semillas tostado, hummus, espinaca, tomate asado, aguacate y aceite especiado.', icon: '🥬', tag: 'Nuevo' },
  { id: 'casa', name: 'De la Casa Sandwich', category: 'Brunch', price: 8.4, description: 'Mollete andaluz, carne mechá, queso fundido y mojo picón. Incluye patatas fritas.', icon: '🥪' },
  { id: 'ny', name: 'NY Sandwich', category: 'Brunch', price: 7.5, description: 'Tres rebanadas de pan de molde, jamón york, queso edam fundido y aguacate.', icon: '🥪', tag: 'Vegetariano' },
  { id: 'bacon', name: 'Baconízate', category: 'Brunch', price: 9.75, description: 'Mollete crujiente, siracha mayo, cebolla crispy, bacon y queso edam gratinado.', icon: '🥓' },
  { id: 'bagel-shelby', name: 'Bagel Shelby', category: 'Brunch', price: 7.8, description: 'Bagel clásico o de semillas, espinaca, bacon, queso edam y huevo a la plancha.', icon: '🥯' },
  { id: 'bagel-ahumado', name: 'Bagel Ahumado', category: 'Brunch', price: 10.5, description: 'Espinaca, huevo, queso crema, aguacate y salmón noruego ahumado.', icon: '🥯' },
  { id: 'bagel-honeymoon', name: 'Bagel Honeymoon', category: 'Brunch', price: 11.5, description: 'Honey mustard artesana, cebolla crujiente, carne mechá, bacon y huevo.', icon: '🥯' }
];

const quiz = [
  { q: '¿Qué hace especial a la Tostada Shelby?', a: ['Bacon, huevo y queso', 'Solo aguacate', 'Helado y chocolate'], c: 0 },
  { q: '¿Qué puedes personalizar en tu desayuno?', a: ['Solo el café', 'Base, ingredientes y bebida', 'Nada'], c: 1 },
  { q: '¿Qué bebida especial puedes disfrutar?', a: ['Café de sabores', 'Solo agua', 'Bebida energética'], c: 0 },
  { q: '¿Qué plan puedes compartir además de comer?', a: ['Una partida de juegos de mesa', 'Una reunión de trabajo', 'Una carrera'], c: 0 },
  { q: '¿Qué te apetece hoy?', a: ['Café', 'Brunch', 'Las tres opciones'], c: 2 }
];

function PhotoPlaceholder({ label = 'FOTOGRAFÍA REAL PENDIENTE', tall = false, src }) {
  const [unavailable, setUnavailable] = useState(false);
  return (
    <div className={`photo-placeholder ${tall ? 'tall' : ''}`}>
      {src && !unavailable
        ? <img className="photo-image" src={src} alt={label} onError={() => setUnavailable(true)} />
        : <div className="photo-fallback" />}
      {(!src || unavailable) && <span className="placeholder-label"><ImageIcon size={13} /> {src ? 'FOTO ORIGINAL PENDIENTE' : label}</span>}
    </div>
  );
}

function Brand({ setTab }) {
  const [logoMissing, setLogoMissing] = useState(false);
  return (
    <button className="brand" onClick={() => setTab('home')} aria-label="Ir al inicio">
      {logoMissing
        ? <span className="brand-missing">LOGOTIPO ORIGINAL PENDIENTE</span>
        : <img src="/images/shelbyville-logo.jpg" alt="Logotipo de perfil oficial de Shelbyville Café" onError={() => setLogoMissing(true)} />}
    </button>
  );
}

function App() {
  const [tab, setTab] = useState('home');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState('');

  const addToCart = (product, qty = 1) => {
    setCart((old) => {
      const found = old.find((i) => i.id === product.id);
      return found
        ? old.map((i) => i.id === product.id ? { ...i, qty: i.qty + qty } : i)
        : [...old, { ...product, qty }];
    });
    setToast(`${product.name} añadido`);
    setTimeout(() => setToast(''), 1800);
  };

  const updateQty = (id, delta) => setCart((old) =>
    old.map((i) => i.id === id ? { ...i, qty: i.qty + delta } : i).filter((i) => i.qty > 0)
  );

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="app-shell">
      <header className="topbar">
        <Brand setTab={setTab} />
        <button className="bag-button" onClick={() => setCartOpen(true)} aria-label="Abrir pedido">
          <ShoppingBag size={20} />
          {cart.length > 0 && <b>{cart.reduce((n, i) => n + i.qty, 0)}</b>}
        </button>
      </header>

      <main>
        {tab === 'home' && <HomeScreen setTab={setTab} addToCart={addToCart} />}
        {tab === 'menu' && <MenuScreen addToCart={addToCart} />}
        {tab === 'create' && <CreateScreen addToCart={addToCart} />}
        {tab === 'games' && <GamesScreen />}
        {tab === 'passport' && <PassportScreen />}
      </main>

      <nav className="bottom-nav" aria-label="Navegación principal">
        {[
          ['home', Home, 'Inicio'],
          ['menu', UtensilsCrossed, 'Carta'],
          ['create', WandSparkles, 'Crear'],
          ['games', Gamepad2, 'Juegos'],
          ['passport', Stamp, 'Pasaporte']
        ].map(([key, Icon, label]) => (
          <button key={key} className={tab === key ? 'active' : ''} onClick={() => setTab(key)}>
            <Icon size={21} strokeWidth={2.2} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      {cartOpen && (
        <CartDrawer
          cart={cart} total={total}
          updateQty={updateQty}
          onClose={() => setCartOpen(false)}
        />
      )}
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

function HomeScreen({ setTab, addToCart }) {
  const featured = products.find((p) => p.id === 'shelby');
  return (
    <div className="page home-page">
      <section className="hero">
        <PhotoPlaceholder src="/images/shelbyville-interior.jpg" label="Interior de Shelbyville Café" tall />
        <div className="hero-overlay">
          <p className="eyebrow">SHELBYVILLE CAFÉ · SEVILLA ESTE</p>
          <h1>GOOD COFFEE.<br />GREAT MOMENTS.</h1>
          <p>Tu rincón de café, brunch y buenos momentos en Sevilla Este.</p>
          <div className="hero-actions">
            <button className="primary" onClick={() => setTab('menu')}>DESCUBRE LA CARTA</button>
            <button className="secondary" onClick={() => setTab('create')}>CREA TU DESAYUNO</button>
          </div>
        </div>
      </section>

      <p className="home-note">Café, brunch y buenos momentos en Sevilla Este.</p>

      <section className="moments-grid">
        {[
          [Coffee, 'COFFEE TIME', 'Cafés con carácter', 'menu'],
          [UtensilsCrossed, 'BRUNCH TIME', 'Abundante y especial', 'menu'],
          [WandSparkles, 'SWEET TIME', 'Un toque dulce', 'menu']
        ].map(([Icon, title, text, dest]) => (
          <button className="moment-card" key={title} onClick={() => setTab(dest)}>
            <Icon size={27} strokeWidth={1.8} />
            <div><h3>{title}</h3><p>{text}</p></div>
            <ChevronRight size={18} />
          </button>
        ))}
      </section>

      <section className="space-showcase">
        <div className="space-copy">
          <p className="kicker">NUESTRO ESPACIO</p>
          <h2>UN RINCÓN CON PERSONALIDAD</h2>
          <p>Pared rosa, detalles turquesa, madera y verde natural: el ambiente de Shelbyville, en cada visita.</p>
        </div>
        <PhotoPlaceholder src="/images/shelbyville-interior.jpg" label="Interior de Shelbyville Café" />
        <div className="space-details"><span>Rosa pastel</span><span>Turquesa</span><span>Verde natural</span></div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div><p className="kicker">DE LA CARTA</p><h2>SHELBYVILLE CLASSICS</h2></div>
          <button onClick={() => setTab('menu')}>Ver carta <ChevronRight size={16} /></button>
        </div>
        <div className="featured-card">
          <div className="featured-art"><span>{featured.icon}</span></div>
          <div className="featured-copy">
            {featured.tag && <span className="tag">{featured.tag}</span>}
            <h3>{featured.name}</h3>
            <p>{featured.description}</p>
            <div><strong>{money(featured.price)}</strong><button onClick={() => addToCart(featured)} aria-label={`Añadir ${featured.name}`}><Plus size={18} /></button></div>
          </div>
        </div>
      </section>

      <section className="game-banner" onClick={() => setTab('games')}>
        <div><p className="kicker">COFFEE, FRIENDS & BOARD GAMES</p><h2>EL RINCÓN DEL JUEGO</h2><span>Retos, partidas y buenos ratos.</span></div>
        <Gamepad2 size={46} />
      </section>

      <ContactStrip />
    </div>
  );
}

function MenuScreen({ addToCart }) {
  const [category, setCategory] = useState('Destacados');
  const [search, setSearch] = useState('');
  const categories = ['Destacados', 'Brunch', 'Clásicos'];
  const visible = products.filter((p) => {
    const matchCategory = category === 'Destacados' || p.category === category;
    const matchSearch = `${p.name} ${p.description}`.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="page">
      <div className="page-title">
        <p className="kicker">SHELBYVILLE MENÚ</p>
        <h1>ELIGE TU MOMENTO</h1>
      </div>
      <label className="search-box">
        <Search size={18} />
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar plato o bebida" />
      </label>
      <div className="category-tabs">
        {categories.map((c) => (
          <button key={c} className={category === c ? 'active' : ''} onClick={() => setCategory(c)}>{c}</button>
        ))}
      </div>
      {visible.length ? (
        <div className="product-grid">
          {visible.map((p) => (
            <article className="product-card" key={p.id}>
              <div className="product-art"><span>{p.icon}</span>{p.tag && <b>{p.tag}</b>}</div>
              <div className="product-copy">
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div><strong>{money(p.price)}</strong><button onClick={() => addToCart(p)}><Plus size={18} /></button></div>
              </div>
            </article>
          ))}
        </div>
      ) : <div className="empty-state"><Search size={32} /><h3>Sin coincidencias</h3><p>Prueba otro nombre o categoría.</p></div>}
    </div>
  );
}

function CreateScreen({ addToCart }) {
  const [step, setStep] = useState(0);
  const [base, setBase] = useState(null);
  const [ingredient, setIngredient] = useState([]);
  const [drink, setDrink] = useState(null);
  const bases = [
    ['Tostada', '🍞', 4.5], ['Tortitas', '🥞', 6], ['Gofre', '🧇', 5.5], ['Sándwich', '🥪', 5], ['Bowl', '🥣', 6]
  ];
  const ingredients = ['Jamón', 'Aguacate', 'Tomato', 'Huevo', 'Bacon', 'Queso', 'Nutella', 'Lotus', 'Dulce de leche'];
  const drinks = [
    ['Café', '☕', 1.5], ['Cappuccino', '☕', 2], ['Café de sabores', '☕', 2.2],
    ['Batido', '🥤', 4.5], ['Zumo', '🧃', 3], ['Limonada', '🍋', 3.5], ['Té', '🫖', 1.8]
  ];
  const toggleIngredient = (name) => setIngredient((old) => old.includes(name) ? old.filter((i) => i !== name) : [...old, name]);
  const basePrice = base?.[2] || 0;
  const total = basePrice + drink?.[2] || 0;
  const canNext = step === 0 ? !!base : step === 1 ? ingredient.length > 0 : step === 2 ? !!drink : true;
  const next = () => setStep((s) => Math.min(3, s + 1));

  if (step === 3) {
    const name = `Mi ${base[0]} Shelby`;
    return (
      <div className="page create-page">
        <div className="page-title"><p className="kicker">TU CREACIÓN</p><h1>BUILD YOUR PERFECT BREAKFAST</h1></div>
        <div className="result-card">
          <div className="result-art"><span>{base[1]}</span><b>{drink?.[1]}</b></div>
          <p className="kicker">RECETA PERSONAL</p>
          <h2>{name}</h2>
          <div className="chips">{ingredient.map((i) => <span key={i}>{i}</span>)}</div>
          <p>Con <strong>{drink[0]}</strong></p>
          <div className="result-bottom"><strong>{money(total)}</strong><button onClick={() => addToCart({ id: `custom-${Date.now()}`, name, price: total, icon: base[1], description: `${ingredient.join(', ')} · ${drink[0]}` })}>AÑADIR AL PEDIDO</button></div>
          <small>Precio orientativo. Confirmar suplementos con el establecimiento.</small>
        </div>
        <button className="reset-link" onClick={() => { setStep(0); setBase(null); setIngredient([]); setDrink(null); }}>Crear otro desayuno</button>
      </div>
    );
  }

  return (
    <div className="page create-page">
      <div className="page-title">
        <p className="kicker">CREATE YOUR BRUNCH</p>
        <h1>BUILD YOUR PERFECT BREAKFAST</h1>
      </div>
      <div className="step-progress">{[0, 1, 2].map((n) => <span key={n} className={n <= step ? 'active' : ''} />)}</div>
      {step === 0 && <>
        <h2>Paso 1 · Elige tu base</h2>
        <div className="choice-grid">
          {bases.map((b) => <button key={b[0]} className={base?.[0] === b[0] ? 'selected' : ''} onClick={() => setBase(b)}><span>{b[1]}</span><b>{b[0]}</b></button>)}
        </div>
      </>}
      {step === 1 && <>
        <h2>Paso 2 · Elige los ingredientes</h2>
        <div className="ingredient-grid">{ingredients.map((i) => <button key={i} className={ingredient.includes(i) ? 'selected' : ''} onClick={() => toggleIngredient(i)}>{i}</button>)}</div>
      </>}
      {step === 2 && <>
        <h2>Paso 3 · Elige tu bebida</h2>
        <div className="drink-list">{drinks.map((d) => <button key={d[0]} className={drink?.[0] === d[0] ? 'selected' : ''} onClick={() => setDrink(d)}><span>{d[1]}</span><b>{d[0]}</b><small>{money(d[2])}</small></button>)}</div>
      </>}
      <div className="step-actions">
        {step > 0 && <button className="back" onClick={() => setStep((s) => s - 1)}>ATRÁS</button>}
        <button className="primary" disabled={!canNext} onClick={next}>{step === 2 ? 'VER MI DESAYUNO' : 'SIGUIENTE'}</button>
      </div>
    </div>
  );
}

function GamesScreen() {
  const [section, setSection] = useState('challenge');
  return (
    <div className="page">
      <div className="page-title"><p className="kicker">COFFEE, FRIENDS & BOARD GAMES</p><h1>THE GAME CORNER</h1></div>
      <div className="game-switch">
        <button className={section === 'challenge' ? 'active' : ''} onClick={() => setSection('challenge')}>RETO SHELBY</button>
        <button className={section === 'ttt' ? 'active' : ''} onClick={() => setSection('ttt')}>3 EN RAYA</button>
      </div>
      {section === 'challenge' ? <QuizGame /> : <TicTacToe />}
    </div>
  );
}

function QuizGame() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [chosen, setChosen] = useState(null);
  const [finished, setFinished] = useState(false);

  const answer = (choice) => {
    if (chosen !== null) return;
    setChosen(choice);
    if (choice === quiz[index].c) setScore((s) => s + 1);
  };

  useEffect(() => {
    if (chosen === null) return;
    const timer = setTimeout(() => {
      if (index === quiz.length - 1) setFinished(true);
      else { setIndex((i) => i + 1); setChosen(null); }
    }, 650);
    return () => clearTimeout(timer);
  }, [chosen, index]);

  const reset = () => { setIndex(0); setScore(0); setChosen(null); setFinished(false); };

  if (finished) return (
    <div className="quiz-result">
      <Trophy size={52} />
      <p className="kicker">CHALLENGE COMPLETADO</p>
      <h2>¡HAS SUPERADO EL<br />SHELBY CHALLENGE!</h2>
      <strong>{score} / {quiz.length}</strong>
      <div className="reward"><span>🎁</span><div><b>RECOMPensa DEMOSTRATIVA</b><p>Has desbloqueado una sorpresa Shelbyville.</p></div></div>
      <small>Simulación editable por el establecimiento. No acredita descuentos reales.</small>
      <button className="primary" onClick={reset}><RotateCcw size={17} /> REPETIR</button>
    </div>
  );
  const q = quiz[index];
  return (
    <div className="quiz-card">
      <div className="quiz-progress"><span>Pregunta {index + 1} de {quiz.length}</span><div><b style={{ width: `${((index + 1) / quiz.length) * 100}%` }} /></div></div>
      <h2>{q.q}</h2>
      <div className="answers">{q.a.map((a, i) => (
        <button key={a} onClick={() => answer(i)} className={chosen === i ? (i === q.c ? 'correct' : 'wrong') : chosen !== null && i === q.c ? 'correct' : ''}>
          <span>{String.fromCharCode(65 + i)}</span>{a}
        </button>
      ))}</div>
    </div>
  );
}

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState('X');
  const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  const winner = lines.map((l) => l.map((i) => board[i]).every((v, _, a) => v && v === a[0]) ? board[l[0]] : null).find(Boolean);
  const draw = !winner && board.every(Boolean);
  const play = (i) => {
    if (board[i] || winner) return;
    setBoard((old) => old.map((v, n) => n === i ? turn : v));
    setTurn((t) => t === 'X' ? 'O' : 'X');
  };
  const reset = () => { setBoard(Array(9).fill(null)); setTurn('X'); };
  return (
    <div className="ttt">
      <div className="turn"><span className={turn === 'X' ? 'active' : ''}>X</span><b>{winner ? `¡Gana ${winner}!` : draw ? 'EMPATE' : `Turno de ${turn}`}</b><span className={turn === 'O' ? 'active' : ''}>O</span></div>
      <div className="ttt-board">{board.map((v, i) => <button key={i} onClick={() => play(i)}>{v}</button>)}</div>
      <button className="reset-link" onClick={reset}><RotateCcw size={16} /> Reiniciar partida</button>
    </div>
  );
}

function PassportScreen() {
  const [stamps, setStamps] = useState(() => Number(localStorage.getItem('shelby-stamps') || 0));
  const [reward, setReward] = useState(false);
  const addStamp = () => {
    const next = stamps >= 10 ? 1 : stamps + 1;
    setStamps(next);
    localStorage.setItem('shelby-stamps', String(next));
  };
  useEffect(() => { setReward(stamps === 10); }, [stamps]);

  return (
    <div className="page passport-page">
      {reward && <div className="passport-reward"><Trophy size={44} /><p className="kicker">PASAPORTE COMPLETO</p><h2>¡MOMENTOS SHELBYVILLE!</h2><p>Recompensa demostrativa configurable por el establecimiento.</p><button onClick={() => setReward(false)}>CONTINUAR</button></div>}
      <div className="passport-card">
        <div className="passport-head"><div><p>MY</p><h1>SHELBY PASSPORT</h1></div><Stamp size={38} /></div>
        <p className="passport-copy">Cada visita cuenta. Completa tu pasaporte y descubre tu recompensa.</p>
        <div className="stamp-grid">{Array.from({ length: 10 }, (_, i) => <button key={i} className={i < stamps ? 'filled' : ''} onClick={i === stamps ? addStamp : undefined} aria-label={`Sello ${i + 1}`}><span>{i < stamps ? '✓' : i + 1}</span></button>)}</div>
        <div className="passport-progress"><b>{stamps} / 10 visitas demo</b><div><span style={{ width: `${stamps * 10}%` }} /></div></div>
      </div>
      <button className="stamp-button" onClick={addStamp} disabled={stamps >= 10}>{stamps >= 10 ? 'PASAPORTE COMPLETADO' : 'AÑADIR VISITA DE PRUEBA'} <Plus size={18} /></button>
      <small className="demo-note">Esta versión es una demostración. Las visitas no son reales ni acreditan recompensas.</small>
    </div>
  );
}

function CartDrawer({ cart, total, updateQty, onClose }) {
  const [prepared, setPrepared] = useState(false);
  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <aside className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-head"><div><p className="kicker">TU PEDIDO</p><h2>MI SELECCIÓN</h2></div><button onClick={onClose}><X size={22} /></button></div>
        {prepared ? (
          <div className="prepared-state"><Coffee size={44} /><h3>Tu selección está lista</h3><p>Esta es una demostración de la experiencia de pedido. Consulta con Shelbyville Café los canales de pedido disponibles.</p><a className="primary" href={`tel:${cafeData.phone.replace(/\s/g, '')}`}><Phone size={17} /> LLAMAR AL CAFE</a><button className="reset-link" onClick={() => setPrepared(false)}>Volver al pedido</button></div>
        ) : cart.length ? (
          <>
            <div className="cart-items">{cart.map((item) => <article key={item.id}><span className="cart-icon">{item.icon}</span><div><h3>{item.name}</h3><p>{money(item.price)}</p></div><div className="qty-controls"><button onClick={() => updateQty(item.id, -1)}>{item.qty === 1 ? <Trash2 size={14} /> : <Minus size={14} />}</button><b>{item.qty}</b><button onClick={() => updateQty(item.id, 1)}><Plus size={14} /></button></div></article>)}</div>
            <div className="cart-footer"><div><span>Total</span><strong>{money(total)}</strong></div><button className="primary" onClick={() => setPrepared(true)}>PREPARAR MI PEDIDO</button><small>Demo · No se realizan pagos ni confirmaciones reales</small></div>
          </>
        ) : <div className="empty-cart"><ShoppingBag size={40} /><h3>Tu pedido está vacío</h3><p>Vuelve a la carta y elige algo rico.</p><button className="primary" onClick={onClose}>IR A LA CARTA</button></div>}
      </aside>
    </div>
  );
}

function ContactStrip() {
  return (
    <section className="contact-strip" id="contacto">
      <div className="contact-copy"><p className="kicker">TE ESPERAMOS</p><h2>SHELBYVILLE CAFÉ</h2><p><MapPin size={16} /> {cafeData.address}<br />{cafeData.postcode}</p></div>
      <div className="contact-actions">
        <a href={cafeData.maps} target="_blank" rel="noreferrer"><MapPin size={17} /> CÓMO LLEGAR</a>
        <a href={`tel:${cafeData.phone.replace(/\s/g, '')}`}><Phone size={17} /> LLAMAR</a>
        <a href={cafeData.instagram} target="_blank" rel="noreferrer"><ExternalLink size={17} /> INSTAGRAM</a>
        <a href={cafeData.menu} target="_blank" rel="noreferrer"><ExternalLink size={17} /> VER CARTA</a>
      </div>
      <div className="map-placeholder"><MapPin size={28} /><b>Séneca este</b><span>Calle Juan Gil, 1 · Sevilla</span></div>
    </section>
  );
}

createRoot(document.getElementById('root')).render(<App />);
