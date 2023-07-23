import { useSignal } from '@preact/signals';
import Button from '../../components/button.tsx';
import H from '../../shared/H.ts';

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

  const isFormValid = useSignal(true);

  const logInfo = async () => {
    try {
      await fetch('api/geolocation');
    } catch (err) {
      H.log(err, 'ERROR');
    }
  };
  const handleSubmit = (e) => {
    isFormValid.value = true;
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
    ].some((val) => isNaN(val) || !val || val <= 0);

    if (!valid) {
      isFormValid.value = false;
      alert('Παρακαλώ συμπλήρωσε σωστά όλα τα πεδία');
      return;
    }
    const sum = (2 * quantity.value) + quantity.value + (2 * quantity.value);

    const first = `${2 * quantity.value} = ${height.value} x ${depth.value}`;
    const second = `${quantity.value} = ${width1.value} x ${depth1.value}`;
    const third = `${2 * quantity.value} = ${width2.value} x ${depth2.value}`;
    finalText.value = {first, second, third, sum};
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div class="mb-2 grid grid-cols-4 gap-4">
          <span>Κουτί</span>
          <input
            type="number"
            min={0}
            class="border border-gray-300 rounded-md px-2 ml-2"
            placeholder="Εκατοστά κουτιού"
            value={boxCentimeters}
            onChange={(e) => {
              boxCentimeters.value = Number(e.target.value);

              width1.value = boxCentimeters.value - boxCentimetersSubtract;
              width2.value = boxCentimeters.value - boxCentimetersSubtract;
              finalText.value = {};
            }}
          />
          <span>Ποσότητα</span>
          <input
            type="number"
            min={0}
            value={quantity.value}
            onChange={(e) => {
              quantity.value = Number(e.target.value);
              finalText.value = {};
            }}
            class="border border-gray-300 rounded-md px-2 ml-2"
          />
          <span>Ύψος</span>
          <input
            type="number"
            min={0}
            value={height.value}
            onChange={(e) => {
              height.value = Number(e.target.value);
              finalText.value = {};
            }}
            class="border border-gray-300 rounded-md px-2 ml-2 mr-0"
          />
          <span>Βάθος</span>
          <input
            type="number"
            min={0}
            value={depth.value}
            onChange={(e) => {
              depth.value = Number(e.target.value);
              finalText.value = {};
            }}
            class="border border-gray-300 rounded-md px-2 ml-2"
          />

          <span>Φάρδος</span>
          <input
            type="text"
            value={width1.value}
            onChange={(e) => {
              width1.value = Number(e.target.value);
              finalText.value = {};
            }}
            class="border border-gray-300 rounded-md px-2 ml-2"
          />
          <span>Βάθος</span>
          <input
            type="number"
            min={0}
            value={depth1.value}
            onChange={(e) => {
              depth1.value = Number(e.target.value);
              finalText.value = {};
            }}
            class="border border-gray-300 rounded-md px-2 ml-2"
          />

          <span>Φάρδος</span>
          <input
            type="text"
            value={width2.value}
            onChange={(e) => {
              width2.value = Number(e.target.value);
              finalText.value = {};
            }}
            class="border border-gray-300 rounded-md px-2 ml-2"
          />
          <span>Βάθος</span>
          <input
            type="number"
            min={0}
            value={depth2.value}
            onChange={(e) => {
              depth2.value = Number(e.target.value);
              finalText.value = {};
            }}
            class="border border-gray-300 rounded-md px-2 ml-2"
          />
          <div class="col-span-4 flex flex-col">
            <Button variant="primary" type="submit" onClick={logInfo}>Υπολόγισε</Button>
          </div>
        </div>
      </form>

      {Object.keys(finalText.value).length > 0 &&
        (
          <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div>{finalText.value.first}</div>
            <div>{finalText.value.second}</div>
            <div>{finalText.value.third}</div>
            <div>{finalText.value.sum} Σύνολο κουτιών</div>
          </div>
        )
      }
    </>
  );
}
