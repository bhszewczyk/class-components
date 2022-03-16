import { Component } from 'react';

import styles from './ErrorBoundry.module.css';

class ErrorBoundry extends Component {
	constructor() {
		super();
		this.state = { hasError: false };
	}
	componentDidCatch(error) {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <p className={styles.error}>Something went wrong!</p>;
		}
		return this.props.children;
	}
}

export default ErrorBoundry;
