import { connect } from "react-redux";
import { Dispatch } from "redux";
import Home from "./Home";
import { setHome, HomeActions } from "../../actions";
import { ApplicationState } from "../../reducers";

const mapStateToProps = (state: ApplicationState) => ({
    home: state.home.home
});

const mapDispatchToProps = (dispatch: Dispatch<HomeActions>) => ({
    setHome: home => dispatch(setHome(home))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
