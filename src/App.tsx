import BookingManager from "./features/booking/BookingManager";
import { createGlobalStyle } from "styled-components";
import { useGetGradesQuery } from "./features/booking/gradesApislice";
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Roboto";
  }
  
  html, body, #root {
		height: 100%;
    width: 100%;
    border: none;
    margin: 0;
    padding: 0;
    background-color: transparent;
  }
`;
const App = (): JSX.Element => {
	const { isError, isSuccess, error } = useGetGradesQuery();
	return (
		<>
			{isSuccess && <BookingManager />}
			{isError && <div>{`Error: ${error}`}</div>}
			{!isError && !isSuccess && <div>Please wait...</div>}
			<GlobalStyle />
		</>
	);
};

export default App;
