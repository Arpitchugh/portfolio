import React from 'react';
import './modal.scss';

const Modal = ({ modal, setModal }) => {
	const clickHandler = e => {
		if (e.target.classList.contains('modal-container')) {
			setModal({ opened: false, title: '', link: '', src: '' });
		}
	};
	return (
		<div
			className='modal-container'
			style={modal.opened ? { display: 'block' } : { display: 'none' }}
			onClick={clickHandler}
		>
			<div className='modal-container-elem'>
				<div className='modal-container-elem-left'>
					<div className='test'>
						<h1>{modal.title}</h1>
						<img
							onClick={() =>
								setModal({ opened: false, title: '', link: '', src: '' })
							}
							className='close'
							src='../images/icons/cross.png'
						/>
					</div>

					<a href={modal.link} target='_blank'>
						Link:<span> {modal.link}</span>
					</a>
					<div className='box'>
						<img
							src={modal.src}
							alt={modal.title}
							className='modal-container-elem-left-img'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
