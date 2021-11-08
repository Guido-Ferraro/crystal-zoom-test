import Selector from "../shared/Selector";
import { useAppDispatch } from "../../../../app/hooks";
import { gradeSelected } from "../../bookingSlice";
import { useGetGradesQuery } from "../../gradesApislice";
const GradeSelector = (): JSX.Element => {
	const grades = useGetGradesQuery().data?.grades as string[];
	const dispatch = useAppDispatch();

	const handleClick = (value: string) => {
		dispatch(gradeSelected(value));
	};

	const options = () => {
		const arr = grades.map((grade: string, index: number) => {
			const splitText: string = grade.split(" ")[0];
			return (
				<option key={index} value={splitText}>
					{splitText}
				</option>
			);
		});
		arr.unshift(
			<option key={"a"} disabled selected>
				Select grade
			</option>
		);
		return arr;
	};

	return <Selector handleClick={handleClick}>{options()}</Selector>;
};

export default GradeSelector;
