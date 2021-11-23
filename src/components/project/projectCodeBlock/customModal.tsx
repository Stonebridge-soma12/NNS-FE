import React, { useEffect } from 'react';
import CloseIcon from '../../../static/img/ico_close1.png';

type Props = {
	isOpen: boolean;
	setIsOpen: any;
	head: any;
	body?: any;
};

const CustomModal = (props: Props) => {
	const { isOpen, setIsOpen, head, body } = props;

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<>
			{isOpen ? (
				<div className="dim-layer-code">
					<div className="dim-bg" />
					<div id="layer" className="modal-layer">
						<button type="button" onClick={closeModal} className="modal-close js-modal-close">
							<img src={CloseIcon} alt="닫기" />
						</button>
						<div className="modal-page1">
							<div className="top">{head}</div>

							<div className="content">{body}</div>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

CustomModal.defaultProps = {
	body: <></>,
};

export default CustomModal;
