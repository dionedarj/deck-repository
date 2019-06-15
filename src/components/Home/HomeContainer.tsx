import { connect } from "react-redux";
import Home from "./Home";
import { setHome } from "../../actions";

console.log(setHome);

const mapDispatchToProps = dispatch => ({
    setHome: home => dispatch(setHome(home))
});

export default connect(null, mapDispatchToProps)(Home);
