import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Home, UtensilsCrossed, WandSparkles, Gamepad2, Stamp, Search,
  Plus, MapPin, Phone, Mail, ExternalLink, ChevronRight,
  Trophy, RotateCcw, X, Image as ImageIcon,
  Check, ArrowLeft, ArrowRight, Leaf
} from 'lucide-react';
import { brandAssets, cafe } from './data/cafe.js';
import { menuCategories, menuImportReport, menuProducts, menuSourceUrl } from './data/menu.js';
import './styles.css';

const formatPrice = (value) => typeof value === 'number'
  ? new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(value)
  : 'Consultar';

const normalize = (value) => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLocaleLowerCase('es');

function getOptionGroups(product) {
  return [...(product.variants ?? []), ...(product.extras ?? [])];
}

function getProductPrice(product, selections) {
  if (typeof product.price !== 'number') return null;
  let total = product.price;
  for (const option of getOptionGroups(product)) {
    for (const choiceId of selections[option.id] ?? []) {
      const choice = option.choices.find((item) => item.id === choiceId);
      if (!choice || typeof choice.priceDelta !== 'number') return null;
      total += choice.priceDelta;
    }
  }
  return total;
}

function hasRequiredOptions(product, selections) {
  return getOptionGroups(product).every((option) => !option.required || (selections[option.id] ?? []).length > 0);
}

function PhotoFrame({ src, alt, className = '' }) {
  if (!src) {
    return (
      <div className={`photo-frame ${className}`} role="img" aria-label={alt}>
        <UtensilsCrossed size={36} className="placeholder-icon" />
      </div>
    );
  }
  return (
    <div className={`photo-frame ${className}`} role="img" aria-label={alt}>
      <img src={src} alt="" loading="lazy" decoding="async" />
    </div>
  );
}

function Brand({ onHome }) {
  const [logoMissing, setLogoMissing] = useState(false);
  return (
    <button className="brand" onClick={onHome} aria-label="Shelbyville Café, ir al inicio">
      {!logoMissing
        ? <img src={brandAssets.logo} alt="Logotipo de Shelbyville Café" onError={() => setLogoMissing(true)} />
        : <span className="brand-fallback">Logotipo de Shelbyville Café</span>}
      <span className="brand-caption"><b>SHELBYVILLE CAFÉ</b><small>COFFEE · BRUNCH · SEVILLA ESTE</small></span>
    </button>
  );
}

function App() {
  const [tab, setTab] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tab]);

  const screens = {
    home: <HomeScreen setTab={setTab} />,
    menu: <MenuScreen />,
    create: <CreateScreen />,
    games: <GamesScreen />,
    passport: <PassportScreen />
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <Brand onHome={() => setTab('home')} />
        <span className="app-mode">CARTA INFORMATIVA · SIN PEDIDOS</span>
      </header>

      <nav className="bottom-nav" aria-label="Navegación principal">
        {[
          ['home', Home, 'Inicio'],
          ['menu', UtensilsCrossed, 'Carta'],
          ['create', WandSparkles, 'Crear'],
          ['games', Gamepad2, 'Juegos'],
          ['passport', Stamp, 'Pasaporte']
        ].map(([key, Icon, label]) => (
          <button key={key} className={tab === key ? 'active' : ''} aria-current={tab === key ? 'page' : undefined} onClick={() => setTab(key)}>
            <Icon size={20} strokeWidth={2} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <main key={tab} id="main-content">
        {screens[tab]}
      </main>
    </div>
  );
}

function PageTitle({ eyebrow, children, description }) {
  return (
    <div className="page-title">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{children}</h1>
      {description && <p className="page-description">{description}</p>}
    </div>
  );
}

function QuickLink({ icon: Icon, label, detail, onClick }) {
  return (
    <button className="quick-link" onClick={onClick}>
      <span className="quick-icon"><Icon size={22} strokeWidth={1.8} /></span>
      <span className="quick-copy"><b>{label}</b><small>{detail}</small></span>
      <ChevronRight className="quick-arrow" size={17} />
    </button>
  );
}

function HomeScreen({ setTab }) {
  return (
    <div className="page home-page">
      <section className="hero">
        <PhotoFrame
          src={brandAssets.interior}
          alt="Fotografía del interior de Shelbyville Café"
          className="hero-photo"
        />
        <div className="hero-copy">
          <p className="eyebrow">SEVILLA ESTE · CAFÉ Y BRUNCH</p>
          <h1>GOOD COFFEE.<br />GREAT MOMENTS.</h1>
          <p>Tu rincón de café, brunch y buenos momentos en Sevilla Este.</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => setTab('menu')}>DESCUBRE LA CARTA</button>
            <button className="button button-secondary" onClick={() => setTab('create')}>CREA TU DESAYUNO</button>
          </div>
        </div>
      </section>

      <section className="quick-grid" aria-label="Accesos rápidos">
        <QuickLink icon={UtensilsCrossed} label="Carta" detail="Brunch y más" onClick={() => setTab('menu')} />
        <QuickLink icon={WandSparkles} label="Crear" detail="Configura tu desayuno" onClick={() => setTab('create')} />
        <QuickLink icon={Gamepad2} label="Juegos" detail="Reto y tres en raya" onClick={() => setTab('games')} />
        <QuickLink icon={Stamp} label="Pasaporte" detail="Progreso de demostración" onClick={() => setTab('passport')} />
      </section>

      <section className="space-section">
        <div className="section-heading">
          <div><p className="eyebrow">EL AMBIENTE SHELBYVILLE</p><h2>NUESTRO ESPACIO</h2></div>
          <Leaf size={23} aria-hidden="true" />
        </div>
        <div className="space-tour">
          <article className="tour-stop">
            <PhotoFrame src={brandAssets.exterior} alt="Fachada de Shelbyville Café" className="tour-photo" />
            <div className="space-copy">
              <p className="eyebrow">01 · LA FACHADA</p>
              <h3>La bienvenida</h3>
              <p>El rótulo de Shelbyville Café y la entrada turquesa marcan el comienzo de la visita.</p>
            </div>
          </article>
          <article className="tour-stop">
            <PhotoFrame src={brandAssets.interior} alt="Interior real de Shelbyville Café" className="tour-photo" />
            <div className="space-copy">
              <p className="eyebrow">02 · EL INTERIOR</p>
              <h3>Tu rincón de brunch</h3>
              <p>El mural del logotipo, la barra de cuadros, las mesas de madera y las plantas naturales.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section brunch-section">
        <div className="section-heading">
          <div><p className="eyebrow">CARTA OFICIAL</p><h2>BRUNCH CON IDENTIDAD</h2></div>
          <button className="text-link" onClick={() => setTab('menu')}>Ver carta <ChevronRight size={16} /></button>
        </div>
        {menuProducts.length
          ? <div className="product-grid">{menuProducts.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}</div>
          : <CatalogUnavailable compact />}
      </section>

      {brandAssets.socialGallery && brandAssets.socialGallery.length > 0 && (
        <section className="section social-gallery-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">@SHELBYVILLECAFE · REDES SOCIALES</p>
              <h2>FOTOGRAFÍAS REALES DEL ESTABLECIMIENTO</h2>
            </div>
            <a href={cafe.instagram} target="_blank" rel="noreferrer" className="text-link">
              Ver Instagram <ExternalLink size={16} />
            </a>
          </div>
          <div className="social-photo-grid">
            {brandAssets.socialGallery.map((item, idx) => (
              <figure key={idx} className="social-photo-card">
                <img src={item.image} alt={item.title} loading="lazy" />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <ContactSection />
    </div>
  );
}

function CatalogUnavailable({ compact = false }) {
  return (
    <article className={`catalog-unavailable ${compact ? 'compact' : ''}`}>
      <span className="catalog-icon"><UtensilsCrossed size={24} /></span>
      <div>
        <p className="eyebrow">FUENTE OFICIAL · PIKOTEA</p>
        <h2>Carta pendiente de importar</h2>
        <p>No se han podido leer los productos del menú desde el navegador. No se muestra una carta parcial ni datos de otras plataformas.</p>
      </div>
      <a className="button button-secondary" href={menuSourceUrl} target="_blank" rel="noreferrer">Abrir Pikotea <ExternalLink size={16} /></a>
    </article>
  );
}

function getSelectedOptionNames(product, selections) {
  if (!product || !selections) return [];
  const names = [];
  for (const option of getOptionGroups(product)) {
    const selectedIds = selections[option.id] ?? [];
    for (const choiceId of selectedIds) {
      const choice = option.choices.find((c) => c.id === choiceId);
      if (choice) {
        const delta = choice.priceDelta ? ` (+${formatPrice(choice.priceDelta)})` : '';
        names.push(`${option.name}: ${choice.name}${delta}`);
      }
    }
  }
  return names;
}

function ProductModal({ product, onClose, onSelect, selected }) {
  const [selections, setSelections] = useState({});

  useEffect(() => {
    const initial = {};
    for (const opt of getOptionGroups(product)) {
      if (opt.required && !opt.multiple && opt.choices.length > 0) {
        initial[opt.id] = [opt.choices[0].id];
      }
    }
    setSelections(initial);
  }, [product]);

  if (!product) return null;

  const currentPrice = getProductPrice(product, selections);
  const isValid = hasRequiredOptions(product, selections);

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-img">
          {product.image ? (
            <img src={product.image} alt={product.name} />
          ) : (
            <div className="product-photo-placeholder">
              <UtensilsCrossed size={44} className="placeholder-icon" />
              <span className="placeholder-label">{product.subcategory || product.category}</span>
            </div>
          )}
          <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar ventana">
            <X size={20} />
          </button>
          {product.badge && <span className="product-badge-overlay">{product.badge}</span>}
        </div>

        <div className="modal-body">
          <div className="modal-title-block">
            <span className="product-meta-subcat">{product.subcategory || product.category}</span>
            <h2 id="modal-title">{product.name}</h2>
            <strong className="modal-price">{formatPrice(currentPrice ?? product.price)}</strong>
          </div>

          {product.description && (
            <p className="modal-description">{product.description}</p>
          )}

          {product.allergens && product.allergens.length > 0 && (
            <div className="modal-allergens-section">
              <span className="allergen-title">Alérgenos confirmados:</span>
              <div className="product-allergens-chips">
                {product.allergens.map((a) => (
                  <span key={a} className="allergen-pill">{a}</span>
                ))}
              </div>
            </div>
          )}

          <div className="modal-options-list">
            <ProductOptions product={product} selections={selections} setSelections={setSelections} />
          </div>
        </div>

        <div className="modal-footer">
          <div>
            <span className="modal-footer-caption">Total calculado:</span>
            <strong className="modal-footer-total">{formatPrice(currentPrice)}</strong>
          </div>
          {onSelect ? (
            <button
              className="button button-primary"
              disabled={!isValid}
              onClick={() => {
                onSelect(product, selections);
                onClose();
              }}
            >
              {selected ? 'SELECCIONADO' : 'ELEGIR ESTA BASE'}
            </button>
          ) : (
            <button className="button button-primary" onClick={onClose}>
              CERRAR
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, onSelect, selected = false, onOpenModal }) {
  const [selections, setSelections] = useState({});
  const optionGroups = getOptionGroups(product);
  const hasOptions = optionGroups.length > 0;
  const price = getProductPrice(product, selections);
  const priceLabel = hasOptions && product.variants && product.variants.length > 0
    ? `Desde ${formatPrice(product.price)}`
    : formatPrice(price ?? product.price);

  return (
    <article className={`product-card ${selected ? 'selected' : ''}`}>
      <div
        className="product-photo"
        role="button"
        tabIndex={0}
        onClick={() => onOpenModal?.(product)}
        onKeyDown={(e) => e.key === 'Enter' && onOpenModal?.(product)}
        aria-label={`Ver detalle de ${product.name}`}
      >
        {product.image ? (
          <img src={product.image} alt={product.name} loading="lazy" />
        ) : (
          <div className="product-photo-placeholder">
            <UtensilsCrossed size={36} className="placeholder-icon" />
            <span className="placeholder-label">{product.subcategory || product.category}</span>
          </div>
        )}
        {product.badge && <span className="product-badge-overlay">{product.badge}</span>}
      </div>

      <div className="product-content">
        <span className="product-meta-subcat">{product.subcategory || product.category}</span>
        <div className="product-title-row">
          <h3>{product.name}</h3>
          <strong className="product-price">{priceLabel}</strong>
        </div>

        {product.description && <p>{product.description}</p>}

        {product.allergens && product.allergens.length > 0 && (
          <div className="product-allergens-chips" title={`Alérgenos confirmados: ${product.allergens.join(', ')}`}>
            <span className="allergen-title">Alérgenos:</span>
            {product.allergens.slice(0, 3).map((a) => (
              <span key={a} className="allergen-pill">{a}</span>
            ))}
            {product.allergens.length > 3 && (
              <span className="allergen-pill">+{product.allergens.length - 3}</span>
            )}
          </div>
        )}

        <div className="product-actions-row">
          {hasOptions ? (
            <button
              type="button"
              className="button button-secondary product-action"
              onClick={() => onOpenModal?.(product)}
            >
              Personalizar ({optionGroups.length} {optionGroups.length === 1 ? 'opción' : 'opciones'})
            </button>
          ) : (
            <button
              type="button"
              className="button button-quiet product-action"
              onClick={() => onOpenModal?.(product)}
            >
              Ver detalle
            </button>
          )}

          {onSelect && (
            <button
              type="button"
              className="button button-primary product-action"
              disabled={product.optionsIncomplete}
              aria-pressed={selected}
              onClick={() => onSelect(product)}
            >
              {selected ? 'SELECCIONADO' : 'ELEGIR ESTA BASE'}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

function ProductOptions({ product, selections, setSelections }) {
  const changeOption = (option, choiceId) => {
    setSelections((current) => {
      const selected = current[option.id] ?? [];
      const next = option.multiple
        ? selected.includes(choiceId) ? selected.filter((item) => item !== choiceId) : [...selected, choiceId]
        : selected.includes(choiceId) ? [] : [choiceId];
      return { ...current, [option.id]: next };
    });
  };

  return getOptionGroups(product).map((option) => (
    <fieldset className="product-option" key={option.id}>
      <legend>{option.name}{option.required ? ' · obligatorio' : ''}</legend>
      {option.choices.map((choice) => {
        const checked = (selections[option.id] ?? []).includes(choice.id);
        return (
          <label key={choice.id}>
            <input type={option.multiple ? 'checkbox' : 'radio'} name={`${product.id}-${option.id}`} checked={checked} onChange={() => changeOption(option, choice.id)} />
            <span>{choice.name}</span>
            <small>{choice.priceDelta === null ? 'Suplemento por confirmar' : choice.priceDelta === 0 ? 'Incluido' : `+ ${formatPrice(choice.priceDelta)}`}</small>
          </label>
        );
      })}
    </fieldset>
  ));
}

function MenuScreen({ addToCart }) {
  const categories = useMemo(() => ['Toda la carta', ...menuCategories.map((item) => item.name)], []);
  const [category, setCategory] = useState('Toda la carta');
  const [subcategory, setSubcategory] = useState('Todas');
  const [search, setSearch] = useState('');
  const [dietFilter, setDietFilter] = useState('all');
  const [modalProduct, setModalProduct] = useState(null);

  const activeCategory = menuCategories.find((item) => item.name === category);
  const subcategories = activeCategory?.subcategories ?? [];

  const categoryCounts = useMemo(() => {
    const counts = { 'Toda la carta': menuProducts.length };
    for (const cat of menuCategories) {
      counts[cat.name] = menuProducts.filter((p) => p.category === cat.name).length;
    }
    return counts;
  }, []);

  const visibleProducts = menuProducts.filter((product) => {
    const categoryMatches = category === 'Toda la carta' || product.category === category;
    const subcategoryMatches = subcategory === 'Todas' || product.subcategory === subcategory;
    const term = normalize(search.trim());
    const options = [...(product.variants ?? []), ...(product.extras ?? [])].flatMap((option) => [option.name, ...option.choices.map((choice) => choice.name)]).join(' ');
    const searchMatches = !term || normalize(`${product.name} ${product.description ?? ''} ${product.category} ${product.subcategory ?? ''} ${options}`).includes(term);

    let dietMatches = true;
    if (dietFilter === 'vegan') dietMatches = product.dietary?.vegan;
    else if (dietFilter === 'vegetarian') dietMatches = product.dietary?.vegetarian || product.dietary?.vegan;
    else if (dietFilter === 'allergens') dietMatches = product.allergens && product.allergens.length > 0;
    else if (dietFilter === 'photos') dietMatches = Boolean(product.image);

    return categoryMatches && subcategoryMatches && searchMatches && dietMatches;
  });

  return (
    <div className="page menu-page">
      <PageTitle eyebrow="CARTA DIGITAL OFICIAL · PIKOTEA" description="Carta 100% completa sincronizada con el menú oficial de Shelbyville Café en Pikotea. Incluye todos los productos, variantes, complementos, precios y fotografías reales.">
        La Carta de Shelbyville
      </PageTitle>

      <label className="search-box">
        <Search size={18} aria-hidden="true" />
        <input aria-label="Buscar en la carta" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar por producto, ingrediente o alérgeno..." />
        {search && <button type="button" className="clear-search" onClick={() => setSearch('')} aria-label="Limpiar búsqueda"><X size={16} /></button>}
      </label>

      <div className="category-tabs" role="group" aria-label="Filtrar por categoría">
        {categories.map((item) => (
          <button key={item} className={category === item ? 'active' : ''} aria-pressed={category === item} onClick={() => { setCategory(item); setSubcategory('Todas'); }}>
            {item} <small>({categoryCounts[item] ?? 0})</small>
          </button>
        ))}
      </div>

      {subcategories.length > 0 && (
        <div className="subcategory-tabs" role="group" aria-label="Filtrar por subcategoría">
          {['Todas', ...subcategories].map((item) => (
            <button key={item} className={subcategory === item ? 'active' : ''} aria-pressed={subcategory === item} onClick={() => setSubcategory(item)}>
              {item}
            </button>
          ))}
        </div>
      )}

      <div className="dietary-filters" role="group" aria-label="Filtros dietéticos">
        <button type="button" className={`dietary-pill ${dietFilter === 'all' ? 'active' : ''}`} onClick={() => setDietFilter('all')}>
          Todos ({menuProducts.length})
        </button>
        <button type="button" className={`dietary-pill ${dietFilter === 'photos' ? 'active' : ''}`} onClick={() => setDietFilter('photos')}>
          📷 Con foto ({menuImportReport.productsWithPhoto})
        </button>
        <button type="button" className={`dietary-pill ${dietFilter === 'vegan' ? 'active' : ''}`} onClick={() => setDietFilter('vegan')}>
          🌱 Vegano
        </button>
        <button type="button" className={`dietary-pill ${dietFilter === 'vegetarian' ? 'active' : ''}`} onClick={() => setDietFilter('vegetarian')}>
          🧀 Vegetariano
        </button>
        <button type="button" className={`dietary-pill ${dietFilter === 'allergens' ? 'active' : ''}`} onClick={() => setDietFilter('allergens')}>
          🌾 Alérgenos confirmados
        </button>
      </div>

      <div className="menu-source">
        <span>Fuente oficial: Menú de autopedidos de Shelbyville Café (Pikotea). 100% de productos y opciones verificados.</span>
        <a href={menuSourceUrl} target="_blank" rel="noreferrer">Ver fuente oficial <ExternalLink size={14} /></a>
      </div>

      <section className="import-report" aria-label="Cobertura de la importación">
        <h2>Carta oficial verificada · Pikotea</h2>
        <p>Todos los productos y categorías han sido extraídos directamente de la API de Pikotea para Shelbyville Café, conservando precios originales, formatos, opciones obligatorias y fotografías del establecimiento.</p>
        <dl>
          <div><dt>Categorías oficiales</dt><dd>{menuImportReport.recoveredCategories}</dd></div>
          <div><dt>Subcategorías</dt><dd>{menuImportReport.recoveredSubcategories}</dd></div>
          <div><dt>Productos totales</dt><dd>{menuImportReport.recoveredProducts}</dd></div>
          <div><dt>Con fotografía real</dt><dd>{menuImportReport.productsWithPhoto}</dd></div>
          <div><dt>Pendientes de foto</dt><dd>{menuImportReport.productsAwaitingPhoto}</dd></div>
          <div><dt>Precios confirmados</dt><dd>100%</dd></div>
        </dl>
      </section>

      {visibleProducts.length ? (
        <div className="product-grid">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              onOpenModal={setModalProduct}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Search size={28} />
          <h2>No encontramos resultados</h2>
          <p>Prueba a cambiar los términos de búsqueda o los filtros seleccionados.</p>
          <button className="text-link" onClick={() => { setSearch(''); setCategory(categories[0]); setSubcategory('Todas'); setDietFilter('all'); }}>
            Mostrar toda la carta
          </button>
        </div>
      )}

      {modalProduct && (
        <ProductModal
          product={modalProduct}
          onClose={() => setModalProduct(null)}
        />
      )}
    </div>
  );
}

function CreateScreen({ addToCart }) {
  const [step, setStep] = useState(0);
  const [baseProduct, setBaseProduct] = useState(null);
  const [selections, setSelections] = useState({});
  const steps = ['Base', 'Opciones', 'Resumen'];

  const back = () => setStep((current) => Math.max(0, current - 1));
  const next = () => setStep((current) => Math.min(steps.length - 1, current + 1));
  const reset = () => {
    setStep(0);
    setBaseProduct(null);
  };

  if (!menuProducts.length) {
    return (
      <div className="page create-page">
        <PageTitle eyebrow="CONFIGURADOR" description="Solo ofrecerá bases y opciones que se hayan recuperado de la carta oficial.">
          Crea tu desayuno
        </PageTitle>
        <CatalogUnavailable compact />
      </div>
    );
  }

  const chooseBase = (product) => {
    setBaseProduct(product);
    setSelections({});
  };
  const canContinue = step === 0
    ? Boolean(baseProduct)
    : step === 1 && baseProduct
      ? !baseProduct.optionsIncomplete && hasRequiredOptions(baseProduct, selections)
      : true;
  const currentPrice = baseProduct ? getProductPrice(baseProduct, selections) : null;

  const [baseCategory, setBaseCategory] = useState('Todas');
  const baseCategories = useMemo(() => ['Todas', ...new Set(menuProducts.map(p => p.category))], []);

  const filteredBases = useMemo(() => {
    return baseCategory === 'Todas'
      ? menuProducts
      : menuProducts.filter(p => p.category === baseCategory);
  }, [baseCategory]);

  return (
    <div className="page create-page">
      <PageTitle eyebrow="CONFIGURADOR · CARTA PIKOTEA" description="Elige tu base favorita (tostadas, tortitas, gofres, bowls, bagels o cafés) y personaliza con todos los complementos e ingredientes al gusto.">
        Crea tu desayuno
      </PageTitle>
      <div className="step-indicator" aria-label={`Paso ${step + 1} de ${steps.length}`}>
        {steps.map((label, index) => <div key={label} className={index <= step ? 'active' : ''}><span>{index < step ? <Check size={14} /> : index + 1}</span><small>{label}</small></div>)}
      </div>

      {step === 0 && (
        <section className="builder-step">
          <div className="step-title"><span>PASO 1</span><h2>Elige una base</h2></div>
          <div className="category-tabs" role="group" aria-label="Filtrar bases por categoría">
            {baseCategories.map(cat => (
              <button
                key={cat}
                type="button"
                className={baseCategory === cat ? 'active' : ''}
                onClick={() => setBaseCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="builder-product-grid">
            {filteredBases.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={chooseBase}
                selected={baseProduct?.id === product.id}
              />
            ))}
          </div>
        </section>
      )}

      {step === 1 && (
        <section className="builder-step">
          {baseProduct && <>
            <div className="step-title"><span>PASO 2</span><h2>Variantes y complementos</h2></div>
            <div className="selected-base"><h3>{baseProduct.name}</h3><p>{baseProduct.description}</p></div>
            <ProductOptions product={baseProduct} selections={selections} setSelections={setSelections} />
            {getOptionGroups(baseProduct).length === 0 && <p className="muted-copy">La ficha oficial recuperada no muestra opciones adicionales para este producto.</p>}
            {!hasRequiredOptions(baseProduct, selections) && <p className="validation-message">Selecciona todas las opciones obligatorias para continuar.</p>}
          </>}
        </section>
      )}

      {step === 2 && baseProduct && (
        <section className="builder-step">
          <div className="step-title"><span>PASO 3</span><h2>Revisa tu selección</h2></div>
          <div className="builder-summary">
            <PhotoFrame src={baseProduct.image} alt={`Fotografía de ${baseProduct.name}`} label={`Añade una foto real de ${baseProduct.name}`} className="summary-photo" />
            <div className="summary-content">
              <p className="eyebrow">{baseProduct.category}</p>
              <h3>{baseProduct.name}</h3>
              <p>{baseProduct.description}</p>
              {getSelectedOptionNames(baseProduct, selections).map((name) => <p key={name}>{name}</p>)}
              <div className="summary-total"><span>Precio calculado desde Pikotea</span><strong>{formatPrice(currentPrice)}</strong></div>
              <small>{currentPrice === null ? 'No se pudo calcular el precio de esta selección.' : 'Precio de demostración; no confirma disponibilidad ni formaliza un pedido.'}</small>
              <button className="button button-primary" disabled={baseProduct.optionsIncomplete || !hasRequiredOptions(baseProduct, selections)} onClick={() => addToCart(baseProduct, selections)}>AÑADIR A LA DEMO</button>
            </div>
          </div>
          <button className="text-link reset-builder" onClick={reset}><RotateCcw size={15} /> Empezar de nuevo</button>
        </section>
      )}

      {step < 2 && (
        <div className="step-actions">
          {step > 0 && <button className="button button-quiet" onClick={back}><ArrowLeft size={16} /> Atrás</button>}
          <button className="button button-primary" disabled={!canContinue} onClick={next}>Continuar <ArrowRight size={16} /></button>
        </div>
      )}
    </div>
  );
}

const quizQuestions = [
  {
    question: '¿En qué zona de Sevilla está Shelbyville Café?',
    answers: ['Sevilla Este', 'Triana', 'Nervión'],
    correct: 0
  },
  {
    question: '¿Qué reúne la experiencia digital Shelbyville?',
    answers: ['Café, brunch y juegos', 'Solo reservas', 'Solo pedidos a domicilio'],
    correct: 0
  },
  {
    question: '¿Para cuántas personas es el tres en raya de la demo?',
    answers: ['Dos, por turnos en el mismo dispositivo', 'Una persona contra la app', 'Cuatro personas'],
    correct: 0
  },
  {
    question: '¿Qué significa un sello en el pasaporte de esta demo?',
    answers: ['Un avance de prueba, no una visita verificada', 'Un descuento real', 'Una reserva confirmada'],
    correct: 0
  },
  {
    question: '¿Cuál es la fuente oficial indicada para importar la carta?',
    answers: ['Pikotea', 'Una selección de directorios', 'Una carta inventada para la demo'],
    correct: 0
  }
];

function GamesScreen() {
  const [game, setGame] = useState('quiz');
  return (
    <div className="page games-page">
      <PageTitle eyebrow="COFFEE, FRIENDS & GAMES" description="Minijuegos para compartir en el mismo dispositivo. La zona de juegos físicos del local es independiente.">
        The Game Corner
      </PageTitle>
      <div className="game-switch" role="tablist" aria-label="Seleccionar juego">
        <button role="tab" aria-selected={game === 'quiz'} className={game === 'quiz' ? 'active' : ''} onClick={() => setGame('quiz')}><Trophy size={17} /> Shelby Challenge</button>
        <button role="tab" aria-selected={game === 'tic-tac-toe'} className={game === 'tic-tac-toe' ? 'active' : ''} onClick={() => setGame('tic-tac-toe')}><Gamepad2 size={17} /> Tres en raya</button>
      </div>
      {game === 'quiz' ? <QuizGame /> : <TicTacToe />}
    </div>
  );
}

function QuizGame() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answerIndex, setAnswerIndex] = useState(null);
  const [finished, setFinished] = useState(false);
  const question = quizQuestions[questionIndex];

  useEffect(() => {
    if (answerIndex === null) return undefined;
    const timer = window.setTimeout(() => {
      if (questionIndex === quizQuestions.length - 1) {
        setFinished(true);
      } else {
        setQuestionIndex((index) => index + 1);
        setAnswerIndex(null);
      }
    }, 650);
    return () => window.clearTimeout(timer);
  }, [answerIndex, questionIndex]);

  const answer = (index) => {
    if (answerIndex !== null) return;
    setAnswerIndex(index);
    if (index === question.correct) setScore((value) => value + 1);
  };

  const reset = () => {
    setQuestionIndex(0);
    setScore(0);
    setAnswerIndex(null);
    setFinished(false);
  };

  if (finished) {
    return (
      <section className="quiz-result">
        <Trophy size={44} />
        <p className="eyebrow">RETO TERMINADO</p>
        <h2>¡Buen juego!</h2>
        <p className="quiz-score">{score} de {quizQuestions.length} respuestas correctas</p>
        <p>Este reto es una demostración informativa. No ofrece premios ni descuentos.</p>
        <button className="button button-primary" onClick={reset}><RotateCcw size={16} /> Repetir reto</button>
      </section>
    );
  }

  return (
    <section className="quiz-card" aria-live="polite">
      <div className="quiz-progress"><span>Pregunta {questionIndex + 1} de {quizQuestions.length}</span><div><b style={{ width: `${((questionIndex + 1) / quizQuestions.length) * 100}%` }} /></div></div>
      <h2>{question.question}</h2>
      <div className="quiz-answers">
        {question.answers.map((option, index) => {
          const isCorrect = index === question.correct;
          const state = answerIndex === null ? '' : isCorrect ? 'correct' : answerIndex === index ? 'incorrect' : '';
          return <button key={option} className={state} disabled={answerIndex !== null} onClick={() => answer(index)}><span>{String.fromCharCode(65 + index)}</span>{option}</button>;
        })}
      </div>
    </section>
  );
}

const winningLines = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState('X');
  const winnerLine = winningLines.find(([a, b, c]) => board[a] && board[a] === board[b] && board[a] === board[c]);
  const winner = winnerLine ? board[winnerLine[0]] : null;
  const draw = !winner && board.every(Boolean);
  const gameOver = Boolean(winner || draw);

  const play = (cell) => {
    if (board[cell] || gameOver) return;
    setBoard((current) => current.map((value, index) => index === cell ? turn : value));
    setTurn((current) => current === 'X' ? 'O' : 'X');
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setTurn('X');
  };

  return (
    <section className="tic-tac-toe">
      <div className="player-status">
        <span className={turn === 'X' && !gameOver ? 'current' : ''}>X</span>
        <b>{winner ? `¡Gana ${winner}!` : draw ? 'Empate' : `Turno de ${turn}`}</b>
        <span className={turn === 'O' && !gameOver ? 'current' : ''}>O</span>
      </div>
      <div className="tic-board" role="grid" aria-label="Tablero de tres en raya">
        {board.map((value, index) => (
          <button
            key={index}
            role="gridcell"
            className={`${value ? `mark-${value.toLowerCase()}` : ''} ${winnerLine?.includes(index) ? 'winning-cell' : ''}`}
            aria-label={`Casilla ${index + 1}${value ? `, ${value}` : ', vacía'}`}
            disabled={Boolean(value) || gameOver}
            onClick={() => play(index)}
          >
            {value}
          </button>
        ))}
      </div>
      <p className="game-caption">Dos personas · Un dispositivo · Sin registro</p>
      <button className="button button-quiet" onClick={reset}><RotateCcw size={16} /> Reiniciar partida</button>
    </section>
  );
}

function getStoredStamps() {
  try {
    const value = Number(window.localStorage.getItem('shelby-stamps') || 0);
    return Number.isInteger(value) ? Math.min(10, Math.max(0, value)) : 0;
  } catch (error) {
    console.error('No se pudo leer el pasaporte de demostración:', error);
    return 0;
  }
}

function PassportScreen() {
  const [stamps, setStamps] = useState(getStoredStamps);
  const [rewardOpen, setRewardOpen] = useState(false);
  const [storageNotice, setStorageNotice] = useState('');

  const addStamp = () => {
    if (stamps >= 10) return;
    const next = stamps + 1;
    setStamps(next);
    try {
      window.localStorage.setItem('shelby-stamps', String(next));
    } catch (error) {
      console.error('No se pudo guardar el pasaporte de demostración:', error);
      setStorageNotice('El navegador no permite guardar el progreso; solo durará esta sesión.');
    }
    if (next === 10) setRewardOpen(true);
  };

  const resetDemo = () => {
    setStamps(0);
    setRewardOpen(false);
    try {
      window.localStorage.removeItem('shelby-stamps');
      setStorageNotice('');
    } catch (error) {
      console.error('No se pudo reiniciar el pasaporte de demostración:', error);
      setStorageNotice('No se pudo borrar el progreso guardado en este navegador.');
    }
  };

  return (
    <div className="page passport-page">
      <PageTitle eyebrow="FIDELIZACIÓN · MODO DEMO" description="Los sellos son de prueba: no verifican visitas y no acreditan recompensas reales.">
        My Shelby Passport
      </PageTitle>
      <section className="passport-card">
        <div className="passport-heading"><div><span>MY</span><h2>SHELBY PASSPORT</h2></div><Stamp size={35} /></div>
        <p>Marca sellos de prueba en este dispositivo. No verifican visitas ni acreditan recompensas del establecimiento.</p>
        <div className="stamp-grid" aria-label={`${stamps} de 10 sellos demo`}>
          {Array.from({ length: 10 }, (_, index) => <span key={index} className={index < stamps ? 'stamped' : ''} aria-label={`Sello ${index + 1}${index < stamps ? ', demo marcado' : ', pendiente'}`}>{index < stamps ? <Check size={17} /> : index + 1}</span>)}
        </div>
        <div className="passport-progress"><b>{stamps} / 10 sellos de prueba</b><div><span style={{ width: `${stamps * 10}%` }} /></div></div>
      </section>
      {storageNotice && <p className="storage-notice" role="status">{storageNotice}</p>}
      <div className="passport-actions">
        <button className="button button-primary" disabled={stamps >= 10} onClick={addStamp}>{stamps >= 10 ? 'PASAPORTE DEMO COMPLETO' : 'AÑADIR SELLO DE PRUEBA'} <Plus size={17} /></button>
        <button className="text-link" onClick={resetDemo}><RotateCcw size={15} /> Reiniciar demo</button>
      </div>
      {rewardOpen && (
        <div className="dialog-backdrop" onClick={() => setRewardOpen(false)}>
          <section className="reward-dialog" role="dialog" aria-modal="true" aria-labelledby="reward-title" onClick={(event) => event.stopPropagation()}>
            <Trophy size={42} />
            <p className="eyebrow">DEMO COMPLETADA</p>
            <h2 id="reward-title">¡Pasaporte lleno!</h2>
            <p>La recompensa está pendiente de definir por Shelbyville Café. Este sello no acredita una visita real.</p>
            <button className="button button-primary" onClick={() => setRewardOpen(false)}>Entendido</button>
          </section>
        </div>
      )}
    </div>
  );
}

function CartDrawer({ cart, total, onClose, updateQuantity }) {
  const [prepared, setPrepared] = useState(false);

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <aside className="cart-drawer" aria-label="Pedido de demostración" onClick={(event) => event.stopPropagation()}>
        <div className="drawer-heading"><div><p className="eyebrow">SOLO DEMO</p><h2>Tu selección</h2></div><button className="icon-button" onClick={onClose} aria-label="Cerrar pedido"><X size={21} /></button></div>
        {prepared
          ? <div className="prepared-state"><Coffee size={40} /><h3>Demo de pedido</h3><p>Esta experiencia no envía pedidos ni realiza pagos. Consulta los canales disponibles con Shelbyville Café.</p><button className="button button-quiet" onClick={() => setPrepared(false)}>Volver a la selección</button></div>
          : cart.length
            ? <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <article key={item.cartId} className="cart-item">
                      <PhotoFrame src={item.image} alt={`Fotografía de ${item.name}`} label={`Añade foto real de ${item.name}`} className="cart-item-photo" />
                      <div className="cart-item-copy"><h3>{item.name}</h3><span>{formatPrice(item.price)} · unidad</span>{item.optionNames?.map((name) => <small key={name}>{name}</small>)}</div>
                      <div className="quantity-controls">
                        <button aria-label={`Quitar una unidad de ${item.name}`} onClick={() => updateQuantity(item.cartId, -1)}>{item.qty === 1 ? <Trash2 size={14} /> : <Minus size={14} />}</button>
                        <b>{item.qty}</b>
                        <button aria-label={`Añadir una unidad de ${item.name}`} onClick={() => updateQuantity(item.cartId, 1)}><Plus size={14} /></button>
                      </div>
                    </article>
                  ))}
                </div>
                <div className="cart-summary"><span>Total de artículos con precio publicado</span><strong>{formatPrice(total)}</strong><small>Precios según menú online consultado; no se confirma disponibilidad ni se tramita el pedido.</small><button className="button button-primary" onClick={() => setPrepared(true)}>PREPARAR MI PEDIDO DEMO</button></div>
              </>
            : <div className="empty-cart"><ShoppingBag size={38} /><h3>Aún no has elegido nada</h3><p>Añade un producto de la carta para probar la selección.</p><button className="button button-primary" onClick={onClose}>Volver a la app</button></div>}
      </aside>
    </div>
  );
}

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-header"><p className="eyebrow">SHELBYVILLE CAFÉ</p><h2>Nos vemos en Sevilla Este</h2><p>{cafe.address}<br />{cafe.postcode}</p></div>
      <div className="contact-links">
        <a href={cafe.maps} target="_blank" rel="noreferrer"><MapPin size={17} /> Cómo llegar</a>
        <a href={cafe.instagram} target="_blank" rel="noreferrer"><ExternalLink size={17} /> Instagram (@shelbyvillecafe)</a>
        {cafe.justEat && <a href={cafe.justEat} target="_blank" rel="noreferrer"><ExternalLink size={17} /> Just Eat</a>}
        {cafe.phone && <a href={`tel:${cafe.phone.replace(/\s/g, '')}`}><Phone size={17} /> Llamar ({cafe.phone})</a>}
        {cafe.email && <a href={`mailto:${cafe.email}`}><Mail size={17} /> {cafe.email}</a>}
      </div>
      <div className="contact-sources">
        <a href={menuSourceUrl} target="_blank" rel="noreferrer">Carta oficial Pikotea <ExternalLink size={14} /></a>
        {cafe.justEat && <a href={cafe.justEat} target="_blank" rel="noreferrer">Perfil oficial Just Eat <ExternalLink size={14} /></a>}
      </div>
    </section>
  );
}

createRoot(document.getElementById('root')).render(<App />);
