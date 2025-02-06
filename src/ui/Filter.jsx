import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

import React from "react";
import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const discount = searchParams.get(filterField) || "all";

  function handleClick(value) {
    searchParams.set("discount", value);
    setSearchParams(searchParams);
  }

  // React.useEffect(() => {
  //   if (!discount) setSearchParams({ discount: "all" });
  // }, [discount, setSearchParams]);

  return (
    <StyledFilter>
      {options.map((data) => (
        <FilterButton
          active={discount == data.value ? 1 : 0}
          disabled={discount == data.value}
          key={data.value}
          onClick={() => handleClick(data.value)}>
          {data.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;
