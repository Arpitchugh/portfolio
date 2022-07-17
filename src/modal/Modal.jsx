import { useState } from 'react';
import './modal.scss';
import { TailSpin } from 'react-loader-spinner';

const Modal = ({ modal, setModal }) => {
	const [loaded, setLoaded] = useState(false);

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
						{!loaded && <TailSpin color='#00BFFF' height={80} width={80} />}
						<img
							onLoad={() => setLoaded(true)}
							src={modal.src}
							alt={modal.title || 'loading-images'}
							className='modal-container-elem-left-img'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
