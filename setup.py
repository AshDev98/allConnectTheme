from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in naufaltheme/__init__.py
from naufaltheme import __version__ as version

setup(
	name='naufaltheme',
	version=version,
	description='theme for testing',
	author='naufal',
	author_email='naufalfathur@gmail.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
