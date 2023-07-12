import { useSignal } from '@preact/signals';
import { Button } from '../components/Button.tsx';

const boxCentimetersSubtract = 3.2;

export default function DimensionsForm() {
  const boxCentimeters = useSignal(50);
  const quantity = useSignal(2);

  const height = useSignal(72);
  const depth = useSignal(55);
  const width1 = useSignal(boxCentimeters.value - boxCentimetersSubtract);
  const depth1 = useSignal(55);
  const width2 = useSignal(boxCentimeters.value - boxCentimetersSubtract);
  const depth2 = useSignal(10);

  const finalText = useSignal({});


  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = ![
      boxCentimeters.value,
      quantity.value,
      height.value,
      depth.value,
      width1.value,
      depth1.value,
      width2.value,
      depth2.value
    ].some(val => isNaN(val) || !val || val <= 0);

    if (!valid) {
      alert('Παρακαλώ συμπλήρωσε σωστά τα πεδία');
      return;
    }
    const sum = (2 * quantity) + quantity + (2 * quantity);

    const first = `${2 * quantity} = ${height} x ${depth}`;
    const second = `${quantity} = ${width1} x ${depth1}`;
    const third = `${2 * quantity} = ${width2} x ${depth2}`;
    finalText.value = {first, second, third, sum};
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="mb-2 grid grid-cols-4 gap-4">
          <span>Κουτί</span>
          <input
            type="number"
            class="border border-gray-300 rounded-md px-2 ml-2"
            placeholder="Εκατοστά κουτιού"
            value={boxCentimeters}
            onchange={(e) => {
              boxCentimeters.value = Number(e.target.value);

              width1.value = boxCentimeters.value - boxCentimetersSubtract;
              width2.value = boxCentimeters.value - boxCentimetersSubtract;
              finalText.value = {};
            }}
          />
          <span>Ποσότητα</span>
          <input
            type="number"
            value={quantity.value}
            onchange={(e) => {
              quantity.value = Number(e.target.value);
              finalText.value = {};
            }}
            class="border border-gray-300 rounded-md px-2 ml-2"
          />
          <span>Ύψος</span>
          <input
            type="number"
            value={height.value}
            onchange={(e) => {
              height.value = Number(e.target.value);
              finalText.value = {};
            }}
            class="border border-gray-300 rounded-md px-2 ml-2 mr-0"
          />
          <span>Βάθος</span>
          <input
            type="number"
            value={depth.value}
            onchange={(e) => {
              depth.value = Number(e.target.value);
              finalText.value = {};
            }}
            class="border border-gray-300 rounded-md px-2 ml-2"
          />

          <span>Φάρδος</span>
          <input
            type="number"
            value={width1.value}
            onchange={(e) => {
              width1.value = Number(e.target.value);
              finalText.value = {};
            }}
            class="border border-gray-300 rounded-md px-2 ml-2"
          />
          <span>Βάθος</span>
          <input
            type="number"
            value={depth1.value}
            onchange={(e) => {
              depth1.value = Number(e.target.value);
              finalText.value = {};
            }}
            class="border border-gray-300 rounded-md px-2 ml-2"
          />

          <span>Φάρδος</span>
          <input
            type="number"
            value={width2.value}
            onchange={(e) => {
              width2.value = Number(e.target.value);
              finalText.value = {};
            }}
            class="border border-gray-300 rounded-md px-2 ml-2"
          />
          <span>Βάθος</span>
          <input
            type="number"
            value={depth2.value}
            onchange={(e) => {
              depth2.value = Number(e.target.value);
              finalText.value = {};
            }}
            class="border border-gray-300 rounded-md px-2 ml-2"
          />
          <div class="col-span-4 flex flex-col items-center justify-center">
            <button type="submit"></button>
            <Button variant="primary">Υπολόγισε</Button>
            <div>
              {Object.keys(finalText.value).length > 0 && (<div class="mt-3">
                <div>{finalText.value.first}</div>
                <div>{finalText.value.second}</div>
                <div>{finalText.value.third}</div>
                <div>Σύνολο κουτιών {finalText.value.sum}</div>
              </div>)}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
