function findOutMrWrong(conversation: string[]) {
  const scenarious = conversation.map((man) => man.split(":"));

  const checkByPlacementNumber = (ex: string) =>
    ex.match(/I'm in (\d+)(st|nd|rd) position/)?.[1];

  /**
   * - The man behind me is Tom
   * - The man in front of me is Tom
   */
  const isOneManBehindOrFrontOfMe = (ex: string) => {
    const matches = ex.match(/The man (behind|in front of) me is (\w+)/);
    return [matches?.[1], matches?.[2]];
  };

  /**
   * - There are 2 people behind me
   * - There is 1 people in front of me
   */
  const areMansBehindOrFrontOfMe = (ex: string) => {
    const matches = ex.match(
      /There (are|is) (\d+) people (behind|in front of) me/
    );
    return [matches?.[2], matches?.[3]];
  };

  for (const [name, expression] of scenarious) {
    console.log(name);

    console.log();
    // console.log(`checkByPlacementNumber`, checkByPlacementNumber(expression));

    console.log(
      `isOneManBehindOrFrontOfMe`,
      isOneManBehindOrFrontOfMe(expression)
    );

    console.log(`isBebindMeManyPeoples`, areMansBehindOrFrontOfMe(expression));
  }

  return null;
}

const convs = [
  "John:I'm in 1st position.",
  "Peter:There is 1 people in front of me.",
  "Tom:There are 2 people behind me.",
  "Peter:The man behind me is Tom.",
];

console.log(`res`, findOutMrWrong(convs)); // John
