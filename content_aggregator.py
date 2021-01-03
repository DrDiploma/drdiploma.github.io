import os
from os import getcwd
from os.path import basename, dirname, join
from goliath import Nexus

class contentGet(Nexus):
	"""docstring for contentGet"""
	def __init__(self):
		content_fold_path = join(getcwd(), 'content')
		content_folders = self.walk_path(content_fold_path, 'folders')

		project_fold = content_folders[0]
		project_folders = self.walk_path(project_fold, 'folders')

		for fold in project_folders:
			files = self.walk_path(fold, 'files')
			print(fold, files)


		

def main():
	contentGet()

if __name__ == '__main__':
	main()