class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.updater = () => this.state.title = 'new title'; // $ Alert
    }
}
