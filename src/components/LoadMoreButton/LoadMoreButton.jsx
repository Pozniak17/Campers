import { LoadBtn } from "./LoadMoreButton.module";

// eslint-disable-next-line react/prop-types
export default function LoadMoreButton({ click }) {
  return <LoadBtn onClick={() => click()}>Load more</LoadBtn>;
}
