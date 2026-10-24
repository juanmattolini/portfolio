// Documentos de ejemplo de una distribuidora ficticia. Cada "## " empieza una sección,
// que es la unidad que el buscador encuentra y cita.
window.DOCUMENTOS = [
  {
    id: 'envios',
    titulo: 'Envíos y entregas',
    texto: `## Zonas y plazos
Entregamos en CABA y Gran Buenos Aires con camiones propios. Los pedidos confirmados antes de las 13 h salen al día hábil siguiente. Para el interior del país despachamos por transporte a elección del cliente, y el plazo depende de la empresa de transporte, normalmente entre 3 y 6 días hábiles.

## Costo del envío
El envío es sin cargo en CABA y GBA para pedidos desde $250.000. Para pedidos menores el costo es de $9.500 por entrega. El flete al interior lo paga el cliente al recibir la mercadería; nosotros la llevamos sin cargo hasta el depósito del transporte en CABA.

## Seguimiento del pedido
Cuando el pedido sale del depósito te llega un mensaje por WhatsApp con el número de remito y la franja horaria estimada. El chofer avisa 30 minutos antes de llegar. Si no hay nadie para recibir, se deja una nota y se reprograma para el día hábil siguiente sin costo; la segunda visita fallida se cobra.

## Retiro en sucursal
Podés retirar sin cargo en cualquiera de las dos sucursales. El pedido está listo para retirar 2 horas después de la confirmación. Hay que presentar el número de pedido y el DNI de quien retira, o una autorización firmada si retira otra persona.`
  },
  {
    id: 'devoluciones',
    titulo: 'Cambios, devoluciones y garantía',
    texto: `## Plazo para cambios y devoluciones
Aceptamos cambios y devoluciones dentro de los 30 días corridos desde la entrega, con la factura o el remito. El producto tiene que estar sin uso y en su envase original. Los productos cortados a medida, como cables y caños por metro, no tienen cambio.

## Cómo devolver un producto
Escribinos por WhatsApp con el número de factura y una foto del producto. Te mandamos una orden de devolución, y con esa orden lo traés a una sucursal o lo pasamos a buscar con el próximo envío a tu zona. El reintegro se hace por el mismo medio de pago dentro de los 10 días hábiles, o como saldo a favor en tu cuenta si lo preferís.

## Productos con falla
Si un producto llega roto o falla al usarlo, lo cambiamos sin cargo durante los primeros 30 días. Pasado ese plazo rige la garantía del fabricante. Para herramientas eléctricas la garantía es de 6 meses a 1 año según la marca y se gestiona en el servicio técnico oficial; nosotros te damos la dirección y el comprobante.

## Errores en el pedido
Si recibiste un producto distinto al que pediste o falta algo, avisanos dentro de las 48 horas de la entrega. Lo corregimos en el siguiente envío a tu zona sin costo.`
  },
  {
    id: 'pagos',
    titulo: 'Medios de pago y facturación',
    texto: `## Medios de pago aceptados
Aceptamos transferencia bancaria, Mercado Pago, tarjetas de débito y crédito, y efectivo en las sucursales. Con tarjeta de crédito hay 3 cuotas sin interés en compras desde $150.000; en más cuotas se aplica el recargo del banco.

## Descuento por pago
Pagando por transferencia o en efectivo tenés un 8% de descuento sobre el precio de lista. El descuento no se suma a otras promociones.

## Facturación
Emitimos factura A o B según tu condición frente a IVA. Para factura A necesitamos el CUIT y la razón social, que se cargan una sola vez en tu cuenta. La factura electrónica llega por mail apenas se confirma el pago.

## Pedido mínimo
No hay pedido mínimo para comprar. El mínimo solo cuenta para el envío sin cargo, que es desde $250.000.`
  },
  {
    id: 'empresas',
    titulo: 'Cuenta corriente para empresas',
    texto: `## Quién puede abrir una cuenta corriente
Las empresas y profesionales con al menos 6 meses de compras regulares pueden pedir cuenta corriente. Se pide constancia de CUIT, el último balance o las últimas tres declaraciones juradas de IVA, y una referencia comercial.

## Plazo y límite de crédito
La cuenta corriente tiene un plazo de pago de 30 días desde la fecha de factura. El límite de crédito inicial es de hasta $2.000.000 y se revisa cada seis meses según el historial de pagos.

## Atrasos
Si una factura pasa 15 días del vencimiento, la cuenta se suspende hasta regularizar y los pedidos nuevos se cobran por adelantado. Los pagos fuera de término tienen un interés del 4% mensual.

## Vendedor asignado
Cada cuenta corriente tiene un vendedor asignado que arma presupuestos por volumen y sigue los pedidos grandes. Lo podés contactar por WhatsApp en horario comercial.`
  },
  {
    id: 'sucursales',
    titulo: 'Sucursales y horarios',
    texto: `## Sucursal Centro
Av. Corrientes 3200, CABA. Atiende de lunes a viernes de 8 a 18 h y los sábados de 8 a 13 h. Tiene estacionamiento para clientes en la puerta.

## Sucursal Oeste y depósito
Ruta 7 km 32, Moreno. Atiende de lunes a viernes de 7 a 17 h. Es donde se retiran los pedidos grandes y los materiales a granel. No abre los sábados.

## Feriados
Las dos sucursales cierran los feriados nacionales. Los pedidos web de esos días se procesan el día hábil siguiente.

## Atención por WhatsApp
Respondemos por WhatsApp de lunes a viernes de 8 a 18 h y los sábados de 8 a 13 h. Fuera de ese horario el asistente responde las preguntas frecuentes y deja la consulta para el equipo.`
  }
];

// Palabras con el mismo sentido que usa la gente al preguntar. Se buscan como si fueran la principal.
window.SINONIMOS = {
  plata: 'pago', pagar: 'pago', abonar: 'pago', cobran: 'pago', tarjeta: 'tarjeta', cuotas: 'cuota',
  mandan: 'envio', mandar: 'envio', llega: 'entrega', llegar: 'entrega', tarda: 'plazo', tardan: 'plazo', demora: 'plazo', cuando: 'plazo',
  despacho: 'envio', provincia: 'interior', cordoba: 'interior', rosario: 'interior', mendoza: 'interior', tucuman: 'interior', neuquen: 'interior', salta: 'interior', flete: 'envio', delivery: 'envio', gratis: 'cargo', gratuito: 'cargo',
  devolver: 'devolucion', reintegro: 'devolucion', reembolso: 'devolucion', cambiar: 'cambio', roto: 'falla', rompio: 'falla', rompe: 'falla', taladro: 'herramienta', amoladora: 'herramienta', rota: 'falla', fallado: 'falla', anda: 'falla', funciona: 'falla',
  abren: 'atiende', abierto: 'atiende', horario: 'atiende', cierran: 'atiende', direccion: 'sucursal', donde: 'sucursal', local: 'sucursal',
  buscar: 'retirar', retiro: 'retirar', credito: 'credito', financiacion: 'cuenta', factura: 'factura', iva: 'factura', cuit: 'cuit'
};
