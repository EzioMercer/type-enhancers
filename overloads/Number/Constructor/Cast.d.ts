interface NumberConstructor {
    <Value extends number>(value: Value): Value;

    <Value extends number>(value: `${Value}`): Value;
}
