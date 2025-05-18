import styled from "styled-components";

const Card = styled.div`
  --primary-clr: #1C204B;
  --dot-clr: #BBC0FF;
  --play: hsl(195, 74%, 62%);

  width: 200px;
  height: 170px;
  border-radius: 10px;
  font-family: "Arial";
  color: #fff;
  display: grid;
  cursor: pointer;
  grid-template-rows: 50px 1fr;

  &:hover .img-section {
    transform: translateY(1em);
  }
`;

const ImgSection = styled.div`
  transition: 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: hsl(195, 74%, 62%);
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    max-width: 100%;
    max-height: 100%;
  }
`;

const CardDesc = styled.div`
  border-radius: 10px;
  padding: 15px;
  position: relative;
  top: -10px;
  display: grid;
  gap: 10px;
  background: var(--primary-clr);
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const CardTitle = styled.div`
  flex: 1;
  font-size: 0.9em;
  font-weight: 500;
`;

const CardMenu = styled.div`
  display: flex;
  gap: 4px;
  margin-inline: auto;
`;

const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--dot-clr);
`;

const CardTime = styled.div`
  font-size: 1.7em;
  font-weight: 500;
`;

const Recent = styled.p`
  line-height: 0;
  font-size: 0.8em;
`;

export default function CardComponent() {
  return (
    <Card className="card work">
      <ImgSection className="img-section">
        <svg xmlns="http://www.w3.org/2000/svg" height="77" width="76">
          <path
            fillRule="nonzero"
            fill="#3F9CBB"
            d="m60.91 71.846 12.314-19.892c3.317-5.36 3.78-13.818-2.31-19.908l-26.36-26.36c-4.457-4.457-12.586-6.843-19.908-2.31L4.753 15.69c-5.4 3.343-6.275 10.854-1.779 15.35a7.773 7.773 0 0 0 7.346 2.035l7.783-1.945a3.947 3.947 0 0 1 3.731 1.033l22.602 22.602c.97.97 1.367 2.4 1.033 3.732l-1.945 7.782a7.775 7.775 0 0 0 2.037 7.349c4.49 4.49 12.003 3.624 15.349-1.782Zm-24.227-46.12-1.891-1.892-1.892 1.892a2.342 2.342 0 0 1-3.312-3.312l1.892-1.892-1.892-1.891a2.342 2.342 0 0 1 3.312-3.312l1.892 1.891 1.891-1.891a2.342 2.342 0 0 1 3.312 3.312l-1.891 1.891 1.891 1.892a2.342 2.342 0 0 1-3.312 3.312Zm14.19 14.19a2.343 2.343 0 1 1 3.315-3.312 2.343 2.343 0 0 1-3.314 3.312Zm0 7.096a2.343 2.343 0 0 1 3.313-3.312 2.343 2.343 0 0 1-3.312 3.312Zm7.096-7.095a2.343 2.343 0 1 1 3.312 0 2.343 2.343 0 0 1-3.312 0Zm0 7.095a2.343 2.343 0 0 1 3.312-3.312 2.343 2.343 0 0 1-3.312 3.312Z"
          />
        </svg>
      </ImgSection>

      <CardDesc className="card-desc">
        <CardHeader className="card-header">
          <CardTitle className="card-title">Play</CardTitle>
          <CardMenu className="card-menu">
            <Dot className="dot" />
            <Dot className="dot" />
            <Dot className="dot" />
          </CardMenu>
        </CardHeader>
        <CardTime className="card-time">32hrs</CardTime>
        <Recent className="recent">Last Week-36hrs</Recent>
      </CardDesc>
    </Card>
  );
}
