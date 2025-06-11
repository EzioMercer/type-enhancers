type Split<Source extends string, Separator extends string> = Source extends `${infer Left}${Separator}${infer Right}`
	? [...(string extends Left ? string[] : [`${Left}`]), ...Split<Right, Separator>]
	: Source extends ""
		? Separator extends ""
			? []
			: [""]
		: string extends Source
			? string[]
			: [Source];

interface String {
	split<Source extends string, Separator extends string>(
		this: Source,
		separator: Separator,
		limit?: undefined,
	): Split<Source, Separator>;

	split(separator: string | RegExp, limit: 0): [];
}
