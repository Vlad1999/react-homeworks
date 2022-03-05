import "./BreedSelectForm.css";

function BreedSelectForm({ breed, getImage }) {
  return (
    <div>
      <form>
        <select
          defaultValue={"-- Select a breed --"}
          name="breedList"
          className="breedList"
          onChange={getImage}
        >
          <option disabled hidden>
            -- Select a breed --
          </option>
          <option value="akita">Akita</option>
          <option value="beagle">Beagle</option>
          <option value="dalmatian">Dalmatian</option>
          <option value="germanshepherd">German Shepherd</option>
          <option value="husky">Husky</option>
          <option value="labrador">Labrador</option>
          <option value="pug">Pug</option>
          <option value="retriever-golden">Golden Retriever</option>
          <option value="spaniel-cocker">Cocker Spaniel</option>
        </select>
      </form>
    </div>
  );
}

export default BreedSelectForm;
