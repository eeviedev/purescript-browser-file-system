"use strict";

var fx = function(f) {
	return function(i) {
		f(i)();
	}
}

export const showOpenFilePicker_ = function (options) {
	return function (onerror) {
		return function (onsuccess) {
			return function () {
				window.showOpenFilePicker(options).then(fx(onsuccess), fx(onerror));
			};
		};
	};
};

export const showSaveFilePickerBase_ = function (options) {
	return function (onerror) {
		return function (onsuccess) {
			return function () {
				window.showSaveFilePicker(options).then(fx(onsuccess), fx(onerror));
			};
		};
	};
};

export const showSaveFilePickerFull_ = function (options) {
	return function (onerror) {
		return function (onsuccess) {
			return function () {
				window.showSaveFilePicker(options).then(fx(onsuccess), fx(onerror));
			};
		};
	};
};

export const showDirectoryPicker = function (onerror) {
	return function (onsuccess) {
		return function () {
			window.showDirectoryPicker().then(fx(onsuccess), fx(onerror));
		};
	};
};

export const kind_FileSystemFileHandle = function (fsh) {
	return function () {
		return fsh.kind;
	};
};

export const name_FileSystemFileHandle = function (fsh) {
	return function () {
		return fsh.name;
	};
};
export const isSameEntry_FileSystemFileHandle = function (fsh1) {
	return function (fsh2) {
		return function () {
			return fsh1.isSameEntry(fsh2);
		};
	};
};

export const queryPermission_FileSystemFileHandle = function (fsh) {
	return function (options) {
		return function (onerror) {
			return function (onsuccess) {
				return function () {
					fsh.queryPermission(options).then(fx(onsuccess), fx(onerror));
				};
			};
		};
	};
};

export const requestPermission_FileSystemFileHandle = function (fsh) {
	return function (options) {
		return function (onerror) {
			return function (onsuccess) {
				return function () {
					fsh.requestPermission(options).then(fx(onsuccess), fx(onerror));
				};
			};
		};
	};
};

export const kind_FileSystemDirectoryHandle = function (fsh) {
	return function () {
		return fsh.kind;
	};
};

export const name_FileSystemDirectoryHandle = function (fsh) {
	return function () {
		return fsh.name;
	};
};
export const isSameEntry_FileSystemDirectoryHandle = function (fsh1) {
	return function (fsh2) {
		return function () {
			return fsh1.isSameEntry(fsh2);
		};
	};
};

export const queryPermission_FileSystemDirectoryHandle = function (fsh) {
	return function (options) {
		return function (onerror) {
			return function (onsuccess) {
				return function () {
					fsh.queryPermission(options).then(fx(onsuccess), fx(onerror));
				};
			};
		};
	};
};

export const requestPermission_FileSystemDirectoryHandle = function (fsh) {
	return function (options) {
		return function (onerror) {
			return function (onsuccess) {
				return function () {
					fsh.requestPermission(options).then(fx(onsuccess), fx(onerror));
				};
			};
		};
	};
};

export const getFile = function (fsh) {
	return function (onerror) {
		return function (onsuccess) {
			return function () {
				fsh.getFile().then(fx(onsuccess), fx(onerror));
			};
		};
	};
};

export const entries_ = function (makeFSFH) {
	return function (makeFSDH) {
		return function (makeTP) {
			return function (fsh) {
				return function (onerror) {
					return function (onsuccess) {
						return function () {
							var itr = fsh.entries();
							var loopMe = function (x, arr) {
								return x.next().then(function (res) {
									if (res.done) {
										return arr;
									} else {
										return loopMe(x, arr.concat([res.value]));
									}
								});
							};
							loopMe(itr, [])
								.then(function (res) {
									var o = [];
									for (var i = 0; i < res.length; i++) {
										o.push(
											makeTP(res[i][0])(
												res[i][1] instanceof FileSystemFileHandle
													? makeFSFH(res[i][1])
													: makeFSDH(res[i][1])
											)
										);
									}
									return Promise.resolve(o);
								}, onerror)
								.then(fx(onsuccess), fx(onerror));
						};
					};
				};
			};
		};
	};
};

export const createWritable = function (fsh) {
	return function (onerror) {
		return function (onsuccess) {
			return function () {
				fsh.createWritable().then(fx(onsuccess), fx(onerror));
			};
		};
	};
};

export const getFileHandle = function (fsh) {
	return function (name) {
		return function (options) {
			return function (onerror) {
				return function (onsuccess) {
					return function () {
						fsh.getFileHandle(name, options).then(fx(onsuccess), fx(onerror));
					};
				};
			};
		};
	};
};

export const getDirectoryHandle = function (fsh) {
	return function (name) {
		return function (options) {
			return function (onerror) {
				return function (onsuccess) {
					return function () {
						fsh.getDirectoryHandle(name, options).then(fx(onsuccess), fx(onerror));
					};
				};
			};
		};
	};
};
