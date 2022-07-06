// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { i } from '../../i18n';
import { session } from '../../main';
import { Uri } from '../../util/uri';
import { resolvePath } from '../command-line';
import { Switch } from '../switch';

export class ArtifactTag extends Switch {
  switch = 'artifact-tag';
  override multipleAllowed = false;
  get help() {
    return [
      i`Requests to activate packages only if they have a specified tag.`
    ];
  }
}
