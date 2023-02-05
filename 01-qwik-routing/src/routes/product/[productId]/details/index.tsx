import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const location = useLocation();
  return (
    <>
      <div>Product Item Details- Página</div>

      <p>Href: {location.href}</p>
      <p>Pathname: {location.pathname}</p>
      <p>Product Id: {location.params.productId}</p>
    </>
  );
});
