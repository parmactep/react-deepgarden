import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';

import withClassName from '../../hoc/withClassName';

export default
@withClassName('_Pagination')
class Pagination extends React.Component {
	static propTypes = {
		from: PropTypes.number,
		to: PropTypes.number,
		total: PropTypes.number
	}
	static defaultProps = {
		from: 0,
		to: 0,
		total: 0
	}
	handleNext = () => {
		this.props.to < this.props.total
			&& this.props.onChange
			&& this.props.onChange(this.props.to + 1)
	}
	handlePrevious = () => {
		const onPage = this.props.to - this.props.from + 1
		const from = this.props.from - onPage
		this.props.from > 1
			&& this.props.onChange
			&& this.props.onChange(from > 0 ? from : 1)
	}
	render() {
		return <div className={this.props.className}>
			<div
				className={classNames(
					'_Pagination__Previous',
					{'_Pagination__Previous--Disabled': this.props.from === 1})}
				onClick={this.handlePrevious}>
				<FaChevronLeft/>
			</div>
			<div className="_Pagination__Select">
				{this.props.from} - {this.props.to} / {this.props.total}
			</div>
			<div
				className={classNames(
					'_Pagination__Next',
					{'_Pagination__Next--Disabled': this.props.to === this.props.total})}
				onClick={this.handleNext}>
				<FaChevronRight/>
			</div>
		</div>
	}
}

import './index.styl'
