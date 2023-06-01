import { useState } from "react";
import PropTypes from "prop-types";
import PodcastListItem from "../PodcastListItem";
import { Wrapper, FormWrapper } from "./style";

const PodcastsList = ({ items }) => {
  const [filteredItems, setFilteredItems] = useState(items);

  const handleChange = (event) => {
    const value = event.target.value.toLowerCase();
    setFilteredItems(
      items.filter(
        (item) =>
          item["im:name"].label.toLowerCase().includes(value) ||
          item["im:artist"].label.toLowerCase().includes(value)
      )
    );
  };

  const renderList = (filteredItems) => {
    return filteredItems.map((item, i) => {
      return (
        <PodcastListItem
          key={i}
          id={item.id.attributes["im:id"]}
          image={item["im:image"][2].label}
          name={item["im:name"].label}
          artist={item["im:artist"].label}
        />
      );
    });
  };

  return (
    <>
      <FormWrapper>
        <form>
          <input
            name="search"
            onChange={handleChange}
            placeholder="Filter podcasts..."
            autocomplete="off"
          />
        </form>
      </FormWrapper>
      <Wrapper>{items.length > 0 && renderList(filteredItems)}</Wrapper>
    </>
  );
};

PodcastsList.propTypes = {
  items: PropTypes.object,
};

export default PodcastsList;
