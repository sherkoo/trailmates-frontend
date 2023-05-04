class Helpers {
  checker = (check, setChecker) => {
    if (check) {
      setChecker(true);
    } else {
      setChecker(false);
    }
  };
}

export default Helpers;
