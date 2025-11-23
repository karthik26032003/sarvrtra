import ProductCard from '../ProductCard';
import product1 from '@assets/stock_images/brass_home_decor_art_e5322683.jpg';

export default function ProductCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ProductCard
        id="1"
        name="Traditional Brass Diya Set"
        price={2499}
        image={product1}
        materials={["Brass", "Handcrafted"]}
        category="Lighting"
      />
    </div>
  );
}
