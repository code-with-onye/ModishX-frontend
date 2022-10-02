let formatter = (n) => {
    const formatterClass = Intl.NumberFormat('en-US');

    const formatted = formatterClass.format(n);

    return formatted;
}

export default formatter;