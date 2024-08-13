/* eslint-disable @typescript-eslint/no-unused-expressions */

import { useState, useEffect } from 'react';

const App = () => {
	const [mood, setMood] = useState('good');
	const [clean, setClean] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	useEffect(() => {
		function assignRangeController(range: HTMLInputElement) {
			const controller = createRangeController({
				initialValue: Number(range.value), // Converte o valor para número
				changed: (e) => updateMood(e.target as HTMLInputElement),
			});

			Object.assign(range, controller);
		}

		type Direction = 'click' | 'left' | 'right';

		function createRangeController(options: { initialValue: number, changed?: (e: Event, controller: unknown) => void }) {
			const DIRECTION_CLICK: Direction = 'click';
			const DIRECTION_RIGHT: Direction = 'right';
			const DIRECTION_LEFT: Direction = 'left';

			const controller = {
				direction: DIRECTION_CLICK as Direction,
				lastValue: options.initialValue,

				oninput: (event: Event) => {
					const target = event.target as HTMLInputElement;
					const value = Number(target.value);
					const lastValue = controller.lastValue;

					if (value === lastValue) {
						controller.direction = DIRECTION_CLICK;
					} else {
						controller.direction = value > lastValue ? DIRECTION_RIGHT : DIRECTION_LEFT;
					}

					controller.lastValue = value;
				},

				onchange: (event: Event) => {
					const target = event.target as HTMLInputElement;
					const value = Number(target.value);

					const slideTo: Record<Direction, number> = {
						[DIRECTION_LEFT]: value <= 45 ? 0 : 50,
						[DIRECTION_RIGHT]: value <= 55 ? 50 : 100,
						[DIRECTION_CLICK]: value < 50 ? 0 : 100,
					};

					controller.lastValue = slideTo[controller.direction];
					target.value = controller.lastValue.toString();

					options.changed && queueMicrotask(() => {
						options.changed!(event, controller);
					});
				},
			};

			return controller;
		}

		const $note = document.querySelector<HTMLTextAreaElement>('textarea[name=note]');
		const $actions = document.querySelector<HTMLDivElement>('.facebox .actions');
		const setCleanMode = (v: boolean) => {
			if (document.body) {
				document.body.dataset.clean = v.toString();
			}

			setClean(v);
		};

		if ($note && $actions) {
			$note.addEventListener('input', () => {
				$note.value = $note.value.replace(/(\r\n|\n|\r)/gm, '');
			});

			$actions.addEventListener('focusin', () => {
				setCleanMode(true);
			});

			$actions.addEventListener('focusout', () => {
				setTimeout(() => setCleanMode(false), 60);
			});

			const range = document.getElementById('main-range') as HTMLInputElement;
			if (range) {
				assignRangeController(range);
			}
		}

		return () => {
			if ($note) $note.removeEventListener('input', () => { });
			if ($actions) {
				$actions.removeEventListener('focusin', () => { });
				$actions.removeEventListener('focusout', () => { });
			}
		};
	}, []);

	const closeButtonAction = () => {
		window.location.reload();
	};

	const infoButtonAction = () => {
		alert(
			'This UI was designed by @musabalfawal and originally posted in a video on this tweet: https://x.com/60fpsdesign/status/1817060810780508356. I saw the video and decided to reproduce it (code a browser version) with an entire Vanilla Web Stack (pure HTML/CSS/JS) by looking to this video and trying a minimal and fair reproduction. This page was built without access to original Design Prototype, so there will be lots of variations as font size, colors, gutters, paddings, adaptations in micro-interactions, etc etc. Also this is a for-fun code, there are no tests, compatibility checks, fallbacks.. nothing. Pure madness! But in general it should meet the requirements of the UI/UX. And yes, I had lots of fun :P'
		);
	};

	function updateMood(range: HTMLInputElement) {
		const score: { [key: number]: string } = { 0: 'bad', 50: 'not-bad', 100: 'good' };
		const mood = score[Number(range.value)];
		setMood(mood);

		document.body.dataset.mood = mood;
		range.setAttribute('aria-valuetext', mood);
	}

	function uiShowThanks() {
		const $template = document.getElementById('submitted') as HTMLTemplateElement;
		const $target = document.querySelector('.submitted');
		if ($template && $target) {
			$target.append($template.content.cloneNode(true));
		}
		setSubmitted(true);
	}

	function submit(data: FormData) {
		uiShowThanks();

		/* do whatever you want with data */
		console.log('[submitted]', data.get('score'), '-', data.get('note'));
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		document.body.dataset.submitted = 'true';
		const data = new FormData(e.currentTarget);
		submit(data);
	};

	return (
		<div data-mood={mood} data-clean={clean} data-submitted={submitted.toString()} className="application">
			<main>
				<div className="container">
					<div className="facebox">
						<header>
							<button
								className="button--rounded"
								title="Close button"
								onClick={closeButtonAction}
							>
								<img
									src="/icons/close.svg"
									alt="Close button icon: A 'X' vector"
									width={24}
									height={24}
								/>
							</button>

							<button
								className="button--rounded"
								title="Info button"
								onClick={infoButtonAction}
							>
								<img
									src="/icons/info-outlined.svg"
									alt="Info button icon: An 'i' inside a outlined circle"
									width={24}
									height={24}
								/>
							</button>
						</header>

						<div className="title">
							<h1>How was your shopping experience?</h1>
						</div>

						<div className="face-draw">
							<div className="face-draw__shape" aria-hidden="true">
								<div className="face-draw__shape__eyes">
									<span></span>
									<span></span>
								</div>
								<div className="face-draw__shape__mouth">
									<span></span>
								</div>
							</div>

							<div className="face-label">
								<div className="face-label__slider">
									<div className="face-label__slide">
										<p>GOOD</p>
									</div>
									<div className="face-label__slide">
										<p>NOT BAD</p>
									</div>
									<div className="face-label__slide">
										<p>BAD</p>
									</div>
								</div>
							</div>
						</div>

						<form id="main-form" onSubmit={handleSubmit}>
							<div className="range">
								<div className="range__input">
									<div className="range__input__bullets">
										<span data-label="Bad"></span>
										<span data-label="Not bad"></span>
										<span data-label="Good"></span>
									</div>
									<input
										min="0"
										max="100"
										defaultValue="100"
										type="range"
										name="score"
										id="main-range"
										aria-valuetext="good"
									/>
								</div>
							</div>

							<div className="actions">
								<textarea
									name="note"
									maxLength={100}
									placeholder="Add Note"
								></textarea>

								<button type="submit" className="button--solid">
									Submit <img src="/icons/arrow-right.svg" alt="Submit" width={24} height={24} />
								</button>
							</div>
						</form>

						<div className="submitted">
							{submitted && (
								<div className="submitted__message">
									<h2>Thank you for your feedback!</h2>
									<p>We're working hard to improve</p>
									<div className="submitted__actions">
										<button className="button--solid">
											Continue my shopping <img src="/icons/arrow-right.svg" alt="Continue shopping" width={24} height={24} />
										</button>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default App;