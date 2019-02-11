export function generateBlock(mainContainerHeight=700) {
	const mainContainer = document.getElementsByClassName('container')[0];
	const blockContainer = document.createElement('div');

	const INNER_BLOCK_CLASS = 'innerBlock';
	const BLOCK_CONTAINER_CLASS = 'blockContainer';
	const BLOCK_HEIGHT = mainContainerHeight * 0.2;

	const randomHeight = Math.round(Math.random() * 100 * mainContainerHeight / 100 * 0.8);

	blockContainer.classList.add(BLOCK_CONTAINER_CLASS);
	blockContainer.innerHTML = `<div class="wrapper"><div class="${INNER_BLOCK_CLASS}" 
style="height: ${BLOCK_HEIGHT + 'px'}; top: 
${randomHeight + 'px'}"></div></div>`;
	mainContainer.appendChild(blockContainer);

	return blockContainer;
};

