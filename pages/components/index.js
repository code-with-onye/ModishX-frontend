import { Button } from "../../components/Button";

const Components = () => {
  return (
    <div>
      <ButtonComponents />
    </div>
  );
};
export default Components;

const ButtonComponents = () => {
  return (
    <div>
      <Button variant="primary" size="small">
        Small
      </Button>
      <Button variant="secondary" size="medium">
        Medium
      </Button>
    </div>
  );
};
