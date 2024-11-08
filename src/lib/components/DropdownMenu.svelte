<script lang="ts">
	import { onMount, tick } from 'svelte';

	export let trigger: any = null;
	export let items: Array<{ label: string; href: string }> = [];

	let isOpen = false;
	let menu: HTMLElement;
	let triggerEl: HTMLElement;

	async function toggleMenu() {
		isOpen = !isOpen;
		if (isOpen) {
			await tick(); // Wait for the DOM to update so `menu` is available
			positionMenu();
		}
	}

	function handleClickOutside(event: MouseEvent) {
		if (menu && !menu.contains(event.target as Node) && !triggerEl.contains(event.target as Node)) {
			isOpen = false;
		}
	}

	function positionMenu() {
		const rect = triggerEl.getBoundingClientRect();
		menu.style.top = `${rect.bottom + window.scrollY}px`;
		menu.style.left = `${rect.right + window.scrollX - menu.offsetWidth}px`;
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	});
</script>

<div class="dropdown">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="trigger"
		bind:this={triggerEl}
		on:click={toggleMenu}
		tabindex="0"
		aria-haspopup="true"
		role="button"
		aria-expanded={isOpen}
	>
		<slot name="trigger">{trigger}</slot>
	</div>

	{#if isOpen}
		<ul class="menu" role="menu" tabindex="-1" aria-label="Dropdown menu" bind:this={menu}>
			{#each items as item (item.label)}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li class="menu-item" role="menuitem" tabindex="0">
					<a href={item.href} on:click={toggleMenu}>{item.label}</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.dropdown {
		position: relative;
		display: inline-block;
	}

	.menu {
		position: fixed;
		min-width: 150px;
		margin: 0;
		background-color: #fff;
		border: 1px solid #ddd;
		border-radius: 4px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		list-style: none;
		z-index: 10;
	}

	.menu-item {
		padding: 0.5rem 1rem;
		cursor: pointer;
		border-bottom: 1px solid gray;
		height: 40px;
	}

	.menu-item:last-child {
		border-bottom: none;
	}

	.menu-item:hover,
	.menu-item:focus {
		background-color: #f0f0f0;
		outline: none;
	}
	.trigger {
		cursor: pointer;
		background-color: transparent;
		border: none;
	}

	a {
		display: flex;
		align-items: center;
		height: 100%;
		width: 100%;
		text-decoration: none;
		color: var(--color-text);
	}
</style>
