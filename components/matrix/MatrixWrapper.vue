<template>
	<div class="matrix-wrapper">
		<MatrixStart v-if="state == MatrixState.start" />
		<MatrixPrepare v-else />
	</div>
</template>

<script setup lang="ts">
import { MatrixState } from '~~/types/enums';

interface Props {
	state: MatrixState;
}

const props = defineProps<Props>();
</script>
