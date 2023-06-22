import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  handleAllLightsOn,
  handleAllLightsOff,
  statusAllLightsOn,
  statusAllLightsOff,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          handleAllLightsOff();
        }}
        disabled={statusAllLightsOff}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          handleAllLightsOn();
        }}
        disabled={statusAllLightsOn}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
