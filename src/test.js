import { getLevel } from './getLevel';
import fetchData from './fetchData';

jest.mock('./fetchData');

beforeEach(() => {
	jest.resetAllMocks();
});

test("request verification", () => {
	fetchData.mockReturnValue({});
	getLevel(5);
	expect(fetchData).toBeCalledWith(`https://server/user/5`)
});

test("test get string level", () => {
	fetchData.mockReturnValue({
		status: "ok",
		level: 35
	});

	expect(getLevel(5)).toBe(`Ваш текущий уровень: 35`)
});

