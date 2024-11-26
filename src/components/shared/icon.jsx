/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export const Icon = ({
  name,
  width,
  height,
  color = "currentColor",
  className = "",
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    fill={color}
    aria-hidden="true"
  >
    <use href={`icons/symbol-defs.svg#${name}`} />
  </svg>
);
