import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface GradesQuery {
	grades: string[];
}

export const gradesApiSlice = createApi({
	reducerPath: "gradesApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://static.healthforcego.com/grades.json",
	}),
	endpoints: (builder) => ({
		getGrades: builder.query<GradesQuery, void>({
			query: () => "",
		}),
	}),
});

export const { useGetGradesQuery } = gradesApiSlice;
