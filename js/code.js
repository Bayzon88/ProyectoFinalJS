function Item(name, precio, stock) {
  (this.name = name), (this.precio = precio), (this.stock = stock);
}

function actualizarStock() {
  let nombreInput = document.getElementById("name").value;
  let precioInput = parseInt(document.getElementById("precio").value);
  let stockInput = parseInt(document.getElementById("stock").value);

  let valorStock = precioInput * stockInput;
  console.log(valorStock);

  let stockTotal = new Item(nombreInput, precioInput, stockInput);
  alert(
    "Ingresaste " +
      stockTotal.stock +
      " al stock de " +
      stockTotal.name +
      " por un valor total de " +
      stockTotal.precio * stockTotal.stock
  );
}
